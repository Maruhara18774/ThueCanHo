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
		/*
        searchApartmentWithText: {
			rest: {
				method: "POST",
				path: "/searchApartmentWithText"
			},
			params:{
				text: {type:"string"}
			},
			async handler({action,params,meta, ... ctx}) {
                const {text} = params;
				const lsWords = text.split(" ");
				const checkList = await dbContext.NHA.findAll();
				const result = [];
				checkList.forEach(element => {
					if(lswords.some(r => element.ID_NHA.include(r)|| element.TEN_DUONG.include(r))){
						result.push(element);
					}
					else{
						const checkDistrict = await dbContext.QUAN.findOne({
							where: {
								ID_QUAN: element.ID_QUAN
							}
						})
						if(lswords.some(r => checkDistrict.TEN_QUAN.include(r))){
							result.push(element);
						}
					}
				});
				
				return result;
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
				const result = [];
				if (idDistrict!= 0){
					const checkList = await dbContext.NHA.findAll({
						where: {
							ID_QUAN: idDistrict
						}
					});
					if(idStyle!=0){
						checkList.forEach(element => {
							const checkStyle = await dbContext.STYLENHA.findOne({
								where: {
									ID_NHA: element.ID_NHA
								},
							})
							if(checkStyle!= null){
								const checkPrice = await dbContext.BANGGIA.findOne({
									where: {
										ID_BANGGIA: element.ID_BANGGIA
									}
								})
								if(checkPrice.MUCGIA_MOT>= minBudget){
									result.push(element);
								}
							}
						});  
					}
					else{
						checkList.forEach(element => {
							const checkPrice = await dbContext.BANGGIA.findOne({
								where: {
									ID_BANGGIA: element.ID_BANGGIA
								}
							})
							if(checkPrice.MUCGIA_MOT>= minBudget){
								result.push(element);
							}
						});  
					}
				}
                else{
					const checkList = await dbContext.NHA.findAll();
					if(idStyle!=0){
						checkList.forEach(element => {
							const checkStyle = await dbContext.STYLENHA.findOne({
								where: {
									ID_NHA: element.ID_NHA
								},
							})
							if(checkStyle!= null){
								const checkPrice = await dbContext.BANGGIA.findOne({
									where: {
										ID_BANGGIA: element.ID_BANGGIA
									}
								})
								if(checkPrice.MUCGIA_MOT>= minBudget){
									result.push(element);
								}
							}
						});  
					}
					else{
						checkList.forEach(element => {
							const checkPrice = await dbContext.BANGGIA.findOne({
								where: {
									ID_BANGGIA: element.ID_BANGGIA
								}
							})
							if(checkPrice.MUCGIA_MOT>= minBudget){
								result.push(element);
							}
						});  
					}
				}
				
				
				return result;
			}
		},
		*/
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
};
