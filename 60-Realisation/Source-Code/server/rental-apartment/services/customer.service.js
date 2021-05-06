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
                if(!username && !password){
                    throw new MoleculerError("Không có người dùng này");
                }
				// Test 1: http://localhost:3000/api/user/signin?username=demo1&password=abc123
                const checkUser = await dbContext.TAIKHOAN.findOne({
                    where: {
                        TEN_TAIKHOAN: username,
                        MATKHAU: password
                      }
                });
				
                // Create account
                // 1 54 28
                // localhost - 1400 
                // npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x !Passw0rd -p 1400 -e mssql -o "./src/models"    
				if (checkUser == null){
					return "Không có người dùng này";
				}
				else{
					return checkUser.ID_TAIKHOAN;
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
				id: {type: "string"}
			},
			async handler({action,params,meta, ... ctx}) {
                const {id} = params;
                const checkDetail = await dbContext.NHA.findAll({
                    where: {
                        ID_NHA: id
                    }
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
		getApartmentPrice:{
			rest: {
				method: "POST",
				path: "/getApartmentPrice"
			},
			params:{
				idPrice: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}) {
                var {idPrice} = params;
				const lsPrice = await dbContext.BANGGIA.findAll();
				var output= 0;
				for(var i=0;i<lsPrice.length;i++){
					var element = lsPrice[i];
					if(element.ID_BANGGIA== idPrice){
						output = element;
						break;
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
				const lsApartment = await dbContext.NHA.findAll();
				const lsDistrict = await dbContext.QUAN.findAll();
				const lsCity = await dbContext.THANHPHO.findAll();
				var quan;
				var nha;
				var output = "";
				for(var i = 0;i<lsApartment.length;i++){
					const element = lsApartment[i];
					if(element.ID_NHA == id){
						nha = element;
						output += element.TEN_DUONG +" ";
						break;
					}
				}
				for(var i = 0;i<lsDistrict.length;i++){
					const element = lsDistrict[i];
					if(element.ID_QUAN == nha.ID_QUAN){
						quan = element;
						output += element.TEN_QUAN +" ";
						break;
					}
				}
				for(var i = 0;i<lsCity.length;i++){
					const element = lsCity[i];
					if(element.ID_THANHPHO == quan.ID_THANHPHO){
						output += element.TEN_THANHPHO +" ";
						break;
					}
				}
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
				idStyle: {type:"string"},
				minBudget: {type: "string"}
			},
			async handler({action,params,meta, ... ctx}) {
                const {idDistrict, idStyle,minBudget} = params;
				var result = [];
				if(idDistrict == 0&& idStyle == 0 && minBudget==0){
					result = await dbContext.NHA.findAll();
				}
				else{
					const lsApartment = await dbContext.NHA.findAll();
					const lsPrice = await dbContext.BANGGIA.findAll();
					lsApartment.forEach(element => {
						for(var i=0;i<lsPrice.length;i++){
							const element2 = lsPrice[i]; 
							if((element.ID_BANGGIA == element2.ID_BANGGIA)&&(element2.MUCGIA_MOT>= minBudget)){
								result.push(element);
								break;
							}
						}
					});
					if(idDistrict!=0){
						for(var i = result.length-1;i>=0;i--){
							var element = result[i];
							if(element.ID_QUAN != idDistrict){
								result.pop(element);
							}
						}
					}
					if(idStyle != 0){
						const lsStyle = await dbContext.STYLENHA.findAll();
						for(var i = result.length-1;i>=0;i--){
							var element = result[i];
							for(var i=0;i<lsStyle.length;i++) {
								const element2 = lsStyle[i];
								if(element.ID_NHA== element2.ID_NHA && element2.ID_STYLE != idStyle){
									result.pop(element);
								}
							}
						}
					}
				}
				
				return result;
			}
		},
		getListCity: {
			rest: {
				method: "POST",
				path: "/getListCity"
			},
			async handler(ctx){
				const listCity = dbContext.THANHPHO.findAll();
				
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
				if(idTK==0){
					idTK = 1002
				}
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
				return createInfo.ID_TT_TAIKHOAN;
			},
		},
		rentalApartment:{
			rest:{
				method: "POST",
				path: "/rentalApartment"
			},
			params:{
				idNha: {type: "string"},
				ngayDat: {type: "string"},
				checkIn: {type: "string"},
				checkOut: {type: "string"},
				buaSang: {type: "string"},
				soGiuongPhu: {type: "string"},
				ghiChu: {type: "string"},
			},
			async handler({action,params,meta, ... ctx}){
                var {idNha,ngayDat,checkIn,checkOut,buaSang,soGiuongPhu,ghiChu} = params;
				// Doing
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
				return createInfo.ID_TT_TAIKHOAN;
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