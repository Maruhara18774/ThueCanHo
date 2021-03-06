"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const {MoleculerError} = require('moleculer').Errors;
const dbContext = require('../src/DBContext')();




module.exports = {
	name: "customer",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		signin: {
			rest: {
				method: "POST",
				path: "/signin"
			},
            params: {
                username: {type:"string", min:3},
                password: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {username, password} = params;
				// Test 1: http://localhost:3000/api/user/signin?username=demo1&password=abc123
                const checkUser = await dbContext.TAIKHOANHETHONG.findOne({
                    where: {
                        TEN_TAIKHOAN_HT: username,
                        MATKHAU: password,
						ROLE_TAIKHOAN_HT: 'Customer'
                      }
                });

                // Create account
                // 1 54 28
                // localhost - 1400
                // npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x !Passw0rd -p 1400 -e mssql -o "./src/models"
				if (checkUser == null){
					return 0;
				}
				else{
					return checkUser.ID_TAIKHOAN_HT;
				}

			}
		},
        getListApartment: {
			rest: {
				method: "GET",
				path: "/getListApartment"
			},
			async handler() {
                const checkList = await dbContext.NHA.findAll();
                if (checkList == null){
                    return "Không có căn hộ nào";
                }
                // Create account
                // 1 54 28
                // localhost - 1400
                // npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x !Passw0rd -p 1400 -e mssql -o "./src/models"
				return checkList;
			}
		},
		getDetailApartment: {
			rest: {
				method: "GET",
				path: "/getDetailApartment"
			},
			params:{
				id: {type: "string"},

			},
			async handler({action,params,meta, ... ctx}) {
                const {id} = params;
                const checkDetail = await dbContext.NHA.findAll({
                    where: {
                        ID_NHA: id
                    },
					include:["ID_LOAINHA_LOAINHA"]
                });
                if (checkDetail == null){
                    return "Không có căn hộ này";
                }
                // Create account
                // 1 54 28
                // localhost - 1400
                // npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x !Passw0rd -p 1400 -e mssql -o "./src/models"
				return checkDetail;
			}
		},

        searchApartmentWithText: {
			rest: {
				method: "POST",
				path: "/searchApartmentWithText"
			},
			params:{
				text: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}) {
                var {text} = params;
				text = text.toUpperCase()
				const lsWords = text.split(" ");
				const lsApartment = await dbContext.NHA.findAll();
				const lsDistrict = await dbContext.QUAN.findAll();
				const lsCity = await dbContext.THANHPHO.findAll();
				var listName = [];
				var output = [];
				lsApartment.forEach(element => {
					var result = element.ID_NHA + " "+element.SONHA + " " +element.TEN_DUONG +" ";
					var quan;
					for(var i=0;i<lsDistrict.length;i++){
						var element2 = lsDistrict[i];
						if(element2.ID_QUAN == element.ID_QUAN){
							quan = element2;
							result += element2.TEN_QUAN +" ";
							break;
						}
					}
					for(var i=0;i<lsCity.length;i++){
						var element2 = lsCity[i];
						if(element2.ID_THANHPHO == quan.ID_THANHPHO){
							result += element2.TEN_THANHPHO +" ";
							break;
						}
					}
					listName.push(result.toUpperCase());
				});
				for(var i = 0 ;i<listName.length;i++){
					const lsWordKey = listName[i].split(" ");
					var check = false;
					for(var k = 0;k<lsWordKey.length;k++){
						const wordKey = lsWordKey[k];
						for(var j = 0;j<lsWords.length;j++){
							const word = lsWords[j];
							if(word == wordKey){
								check = true;
								break;
							}

						}
						if(check){
							break;
						}
					}
					if(check){
						output.push(lsApartment[i]);
					}
				}

				return output;
			}
		},
		getAddressApartment:{
			rest: {
				method: "POST",
				path: "/getAddressApartment"
			},
			params:{
				id: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}) {
                var {id} = params;
				const myApart = await dbContext.NHA.findOne({
					where:{
						ID_NHA: id
					}
				})
				const myDistrict = await dbContext.QUAN.findOne({
					where:{
						ID_QUAN: myApart.ID_QUAN
					}
				})
				const myCity = await dbContext.THANHPHO.findOne({
					where:{
						ID_THANHPHO: myDistrict.ID_THANHPHO
					}
				})
				const myCountry = await dbContext.QUOCGIA.findOne({
					where:{
						ID_QUOCGIA: myCity.ID_QUOCGIA
					}
				})
				const output = myApart.SONHA+" "+myApart.TEN_DUONG+" "+myDistrict.TEN_QUAN+" "+myCity.TEN_THANHPHO+" "+myCountry.TEN_QUOCGIA;
				return output;
			}
		},

		searchApartmentWithDetail: {
			rest: {
				method: "POST",
				path: "/searchApartmentWithDetail"
			},
			params:{
				idDistrict: {type:"string"},
				idStyle: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}) {
                const {idDistrict, idStyle} = params;
				var result = [];
				if(idDistrict!= "0"){
					const lsApart = await dbContext.NHA.findAll({
						where:{
							ID_QUAN: idDistrict
						},
						include:["ID_QUAN_QUAN","STYLENHAs"]
					})
					if(idStyle!="0"){
						lsApart.forEach(item =>{
							if(item.STYLENHAs[0].ID_STYLE.toString() == idStyle){
								result.push(item);
							}
						})
					}
					else{
						lsApart.forEach(item =>{
								result.push(item);
						})
					}
				}
				else{
					const lsApart = await dbContext.NHA.findAll({
						include:["ID_QUAN_QUAN","STYLENHAs"]
					})
					if(idStyle!="0"){
						lsApart.forEach(item =>{
							if(item.STYLENHAs[0].ID_STYLE.toString() == idStyle){
								result.push(item);
							}
						})
					}
					else{
						lsApart.forEach(item =>{
								result.push(item);

						})
					}
				}

				return result;
			}
		},
		// Select bar - START
		getListCountry:{
			rest:{
				method: "POST",
				path: "/getListCountry"
			},
			async handler({action,params,meta, ... ctx}){
                const checkCountry = await dbContext.QUOCGIA.findAll();
				return checkCountry;
			},
		},
		getListCity: {
			rest: {
				method: "POST",
				path: "/getListCity"
			},
			params:{
				countryId: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}){
				const {countryId} = params;
				const listCity = dbContext.THANHPHO.findAll({
					where:{
						ID_QUOCGIA: countryId
					}
				});

				return listCity;

			}
		},
		getListDistrict:{
			rest:{
				method: "POST",
				path: "/getListDistrict"
			},
			params:{
				cityId: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}){
				const {cityId} = params;
                const checkCity = await dbContext.QUAN.findAll({
                    where: {
                        ID_THANHPHO: cityId
                      }
                });
				return checkCity;
			},
		},
		getListStyle:{
			rest:{
				method: "POST",
				path: "/getListStyle"
			},
			async handler({action,params,meta, ... ctx}){
                const checkStyle = await dbContext.STYLE.findAll();
				return checkStyle;
			},
		},
		savePaymentInfo:{
			rest:{
				method: "POST",
				path: "/savePaymentInfo"
			},
			params:{
				tenKH: {type: "string"},
				email: {type: "string"},
				phoneNumber: {type: "string"},
				maGiayTo: {type: "string"},
				loaiGiayTo: {type: "string"},
				quocTich: {type: "string"},
				gioiTinh: {type: "string"},
				idTK: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {tenKH,email,phoneNumber,maGiayTo,loaiGiayTo,quocTich,gioiTinh,idTK} = params;
				if(idTK=="0"){
					idTK = 'DEFAULT';
				}
				const checkInfo = await dbContext.THONGTINKHACHHANG.findOne({
					where:{
						MA_GIAYTOTUYTHAN: maGiayTo,
						LOAI_GIAYTOTUYTHAN: loaiGiayTo,
					}
				});
				if (gioiTinh == "Nam"){
					gioiTinh = false;
				}
				else{
					gioiTinh = true;
				}
				if(checkInfo ==null){
					const createInfo = await dbContext.THONGTINKHACHHANG.create({
						TEN_KHACHHANG: tenKH,
						EMAIL: email,
						PHONE_NUMBER: phoneNumber,
						MA_GIAYTOTUYTHAN: maGiayTo,
						LOAI_GIAYTOTUYTHAN: loaiGiayTo,
						QUOCTICH: quocTich,
						GIOITINH: gioiTinh,
						ID_TAIKHOAN: idTK
					})
					return createInfo.ID_TT_KHACHHANG;
				}
				else{
					return checkInfo.ID_TT_KHACHHANG;
				}
			},
		},
		rentalApartment:{
			rest:{
				method: "POST",
				path: "/rentalApartment"
			},
			params:{
				idNha: {type: "string"},
				idTTKH: {type: "string"},
				ngayDat: {type: "string"},
				checkIn: {type: "string"},
				checkOut: {type: "string"},
				ngayDen: {type: "string"},
				ngayDi: {type: "string"},
				tongTienPhong: {type: "string"},
				buaSang: {type: "string"},
				tongTienBuaSang: {type: "string"},
				soGiuongPhu: {type: "string"},
				tongTienGiuongPhu:{type: "string"},
				phiGTGT: {type: "string"},
				tongTien: {type: "string"},
				ghiChu: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idNha,idTTKH,ngayDat,checkIn,checkOut,ngayDen,ngayDi,tongTienPhong,buaSang,tongTienBuaSang,soGiuongPhu,tongTienGiuongPhu,phiGTGT,tongTien,ghiChu} = params;
				const createDCH = await dbContext.DATCANHO.create({
					ID_NHA: idNha,
					ID_TT_KHACHHANG: idTTKH,
					NGAYDAT: ngayDat,
					CHECKIN: checkIn,
					CHECKOUT: checkOut,
					NGAY_DEN: ngayDen,
					NGAY_DI: ngayDi,
					TONGTIEN_PHONG: parseFloat(tongTienPhong),
					BUASANG: parseInt(buaSang),
					TONGTIEN_BUASANG: parseFloat(tongTienBuaSang),
					SO_GIUONGPHU: parseInt(soGiuongPhu),
					TONGTIEN_GIUONGPHU: parseFloat(tongTienGiuongPhu),
					PHI_GTGT: parseFloat(phiGTGT),
					TONGTIEN: parseFloat(tongTien),
					GHICHU: ghiChu,
					ID_TT_DCH: 1
				})
				return createDCH.ID_DATCANHO;
			},
		},
		getTypeApartment:{
			rest:{
				method: "POST",
				path: "/getTypeApartment"
			},
			params:{
				idType: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idType} = params;
				const checkType = await dbContext.LOAINHA.findOne({
					where:{
						ID_LOAINHA: idType
					}
				})
				return checkType.TEN_LOAINHA;
			},
		},
		getListRoom:{
			rest:{
				method: "POST",
				path: "/getListRoom"
			},
			params:{
				idApartment: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idApartment} = params;
				const lsRoom = await dbContext.PHONG.findAll({
					where:{
						ID_NHA: idApartment
					},
					include:["ID_LOAIPHONG_LOAIPHONG","ID_LOAIGIUONG_LOAIGIUONG"]
				})
				return lsRoom;
			},
		},
		getAccountInfo:{
			rest:{
				method: "POST",
				path: "/getAccountInfo"
			},
			params:{
				id: {type: "string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {id} = params;
				id = parseInt(id);
				const acc = dbContext.TAIKHOANHETHONG.findOne({
					where:{
						ID_TAIKHOAN_HT: id
					}
				})
				return acc;
			},
		},
		updateCustomerInfo4Account:{
			rest:{
				method: "POST",
				path: "/updateCustomerInfo4Account"
			},
			params:{
				idCustomerInfo: {type: "string"},
				tenKH: {type: "string"},
				email: {type: "string"},
				phone: {type: "string"},
				gtttID: {type: "string"},
				gtttType: {type: "string"},
				quocTich: {type: "string"},
				gioiTinh: {type: "string"},
				idAccount: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idCustomerInfo, tenKH,email,phone,gtttID,gtttType,quocTich,gioiTinh,idAccount} = params;
				const acc = dbContext.THONGTINKHACHHANG.update(
					{
						TEN_KHACHHANG:tenKH,
						EMAIL: email,
						PHONE_NUMBER:phone,
						MA_GIAYTOTUYTHAN:gtttID,
						LOAI_GIAYTOTUYTHAN:gtttType,
						QUOCTICH:quocTich,
						GIOITINH:(gioiTinh=="Nam"?false:true),
						ID_TAIKHOAN: idAccount
					},
					{
						where:{
							ID_TT_KHACHHANG: idCustomerInfo
						}
					}
				)
				return acc;
			},
		},
		getAllListRental:{
			rest:{
				method: "POST",
				path: "/getAllListRental"
			},
			params:{
				idCustomerInfo: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idCustomerInfo} = params;
				idCustomerInfo = parseInt(idCustomerInfo);
				const ls = dbContext.DATCANHO.findAll({
					where:{
						ID_TT_KHACHHANG: idCustomerInfo
					},
					include:["ID_TT_DCH_TRANGTHAIDATCANHO"]
				})
				return ls;
			},
		},
		updateRentalState:{
			rest:{
				method: "POST",
				path: "/updateRentalState"
			},
			params:{
				idOrder: {type: "string"},
				idState: {type: "string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {idOrder,idState} = params;
				idOrder = parseInt(idOrder);
				idState = parseInt(idState);
				const stateSet = dbContext.DATCANHO.update({
					ID_TT_DCH: idState
				},{
					where:{
						ID_DATCANHO: idOrder
					}
				})
				return stateSet;
			},
		},
		getCustomerInfo:{
			rest:{
				method: "POST",
				path: "/getCustomerInfo"
			},
			params:{
				idAccount : {type: "string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {idAccount} = params;
				const stateSet = dbContext.THONGTINKHACHHANG.findOne({
					where:{
						ID_TAIKHOAN: idAccount
					}
				})
				if(stateSet == null){
					return 0;
				}
				return stateSet;
			},
		},
		register:{
			rest:{
				method: "POST",
				path: "/register"
			},
			params:{
				username: {type:"string", min:3},
                password: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {username,password} = params;
				const check = await dbContext.TAIKHOANHETHONG.findAll();
				check.forEach(element=>{
					if(element.TEN_TAIKHOAN_HT == username){
						return "Trùng tên tài khoản";
					}
				})
					const createAccount = await dbContext.TAIKHOANHETHONG.create({
						where:{
							TEN_TAIKHOAN_HT: username,
							MATKHAU: password,
							ROLE_TAIKHOAN_HT: "Customer"
						}
					})
					return createAccount.ID_TAIKHOAN_HT;
			},
		},
		savedPaypalCheckout:{
			rest:{
				method: "POST",
				path: "/savedPaypalCheckout"
			},
			params:{
				idPayment: {type:"string"},
                code: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {idPayment, code} = params;
				const createPS = await dbContext.PAYPALSAVED.create({
					ID_PAYMENT: parseInt(idPayment),
					ID_TRANSACTION: code
				});
				return createPS.ID_SAVED;
			},
		},
		getPaypalTransactionID: {
			rest:{
				method: "POST",
				path: "/getPaypalTransactionID"
			},
			params:{
				idOrder: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}){
                var {idOrder} = params;
				const check = dbContext.PAYPALSAVED.findOne({
					where:{
						ID_PAYMENT: idOrder
					}
				})
				return check;
			},
		},
		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */

		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {
	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
}
