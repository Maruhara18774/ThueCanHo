"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const {MoleculerError} = require('moleculer').Errors;
const dbContext = require('../src/DBContext')();




module.exports = {
	name: "admin",

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
		/*-------------------------------[Get] List of Account------------------------------*/
		getListAccount: {
			rest: {
				method: "GET",
				path: "/getListAccount"
			},
			async handler() {
                const checkList = await dbContext.TAIKHOAN.findAll();
                if (checkList == null){
                    return "Không có Tài khoản nào";
                }
				return checkList;
			}
		},
		/*-------------------------------[Post] AddAccount------------------------------*/
		addAccount: {
			rest: {
				method: "POST",
				path: "/addAccount"
			},
			params: {
                username: {type:"string"},
                password: {type:"string"},
				role: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {username, password, role} = params;	
                const createAccount = await dbContext.TAIKHOAN.findOrCreate({
					where: {TEN_TAIKHOAN: username},
					defaults: {
						TEN_TAIKHOAN: username,
						MATKHAU: password,
						ROLE_TAIKHOAN: role
					}
				});
				return createAccount;
			}
		},
		/*-------------------------------[Get] Account by ID------------------------------*/
		getIdAccount: {
			rest: {
				method: "GET",
				path: "/getIdAccount/"
			},
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;
                const checkAccount = await dbContext.TAIKHOAN.findOne({
					where: {
						ID_TAIKHOAN: id
					}
				});
                if (checkAccount == null){
                    return "Không có Tài khoản này";
                } 
				return checkAccount;
			}
		},
		getAccountInfo: {
			rest: {
				method: "GET",
				path: "/getAccountInfo/"
			},
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;
                const checkList = await dbContext.TAIKHOAN.findOne({
					where: {
						ID_TAIKHOAN: id
					}
				});
                if (checkList == null){
                    return "Không có Tài khoản này";
                } 
				return checkList;
			}
		},
		/*-------------------------------[Post] UpdateAccount------------------------------*/
		updateAccount: {
			rest: {
				method: "POST",
				path: "/updateAccount/"
			},
			params: {
                username: {type:"string"},
                password: {type:"string"},
				role: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {id, username, password, role} = params;				 	
                const updateAccount = await dbContext.TAIKHOAN.update(
					{
						TEN_TAIKHOAN: username, MATKHAU: password, ROLE_TAIKHOAN: role					
					},
					{
						where: {ID_TAIKHOAN: id}
					}													
				);
				return updateAccount;						
			}
		},
		/*-------------------------------[Post] DeleteAccount------------------------------*/
		deleteAccount: {
			rest: {
				method: "POST",
				path: "/deleteAccount/"
			},
			params: {
				id: {type: "string"},
            },
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;	
                const deleteAccount = await dbContext.TAIKHOAN.destroy({
					where: {ID_TAIKHOAN: id}
				})
				return deleteAccount;
			}
		},
		/*-------------------------------[Get] List of District------------------------------*/
		getListDistrict: {
			rest: {
				method: "GET",
				path: "/getListDistrict"
			},
			async handler({action,params,meta, ... ctx}) {
                const lstQuan = await dbContext.QUAN.findAll({})
				return lstQuan
			}
		},
		/*-------------------------------[Get] List of Nation------------------------------*/
		getListCountry: {
			rest: {
				method: "GET",
				path: "/getListCountry"
			},		
			async handler({action,params,meta, ... ctx}) {
                const lstQuocGia = await dbContext.QUOCGIA.findAll()
				return lstQuocGia
			}
		},
		/*-------------------------------[Get] List of City------------------------------*/
		getListCity: {
			rest: {
				method: "GET",
				path: "/getListCity"
			},
			async handler({action,params,meta, ... ctx}) {
                const lstThanhPho = await dbContext.THANHPHO.findAll()
				return lstThanhPho
			}
		},
		/*-------------------------------[Post] Add District------------------------------*/
		addDistrict: {
			rest: {
				method: "POST",
				path: "/addDistrict"
			},
			params: {
                districtName: {type:"string"},
				idCity: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {districtName, idCity} = params;	
                const createDistrict = await dbContext.QUAN.findOrCreate({
					where: {TEN_QUAN: districtName},
					defaults: {
						TEN_QUAN: districtName,
						ID_THANHPHO: idCity				
					}
				});
				return createDistrict;
			}
		},
		/*-------------------------------[Post] Add Nation ------------------------------*/
		addCountry: {
			rest: {
				method: "POST",
				path: "/addCountry"
			},
			params: {
                countryName: {type:"string"},
            },
			async handler({action,params,meta, ... ctx}) {
				const {countryName} = params;	
                const createCountry = await dbContext.QUOCGIA.findOrCreate({
					where: {TEN_QUOCGIA: countryName},
					defaults: {
						TEN_QUOCGIA: countryName,		
					}
				});
				return createCountry;
			}
		},
		/*-------------------------------[Get] CountryById ------------------------------*/
		getIdCountry: {
			rest: {
				method: "GET",
				path: "/getIdCountry/"
			},
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;
                const checkList = await dbContext.QUOCGIA.findOne({
					where: {
						ID_QUOCGIA: id
					}
				});
                if (checkList == null){
                    return "Không có Tài khoản này";
                } 
				return checkList;
			}
		},
		/*-------------------------------[Post] UpdateCountry------------------------------*/
		updateCountry: {
			rest: {
				method: "POST",
				path: "/updateCountry/"
			},
			params: {
                countryName: {type:"string"},
            },
			async handler({action,params,meta, ... ctx}) {
				const {id, countryName} = params;				 	
                const updateCountry = await dbContext.QUOCGIA.update(
					{
						TEN_QUOCGIA: countryName				
					},
					{
						where: {ID_QUOCGIA: id}
					}													
				);
				return updateCountry;						
			}
		},
		/*-------------------------------[Post] Add City ------------------------------*/
		addCity: {
			rest: {
				method: "POST",
				path: "/addCity"
			},
			params: {         
                cityName: {type:"string"},
				idCountry: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {cityName, idCountry} = params;	
                const createCity = await dbContext.THANHPHO.findOrCreate({
					where: {TEN_THANHPHO: cityName},
					defaults: {
						TEN_THANHPHO: cityName,
						ID_QUOCGIA: idCountry
					}
				});
				return createCity;
			}
		},
		/*-------------------------------[Get] CityById ------------------------------*/
		getIdCity: {
			rest: {
				method: "GET",
				path: "/getIdCity/"
			},
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;
                const checkList = await dbContext.THANHPHO.findOne({
					where: {
						ID_THANHPHO: id
					}
				});
                if (checkList == null){
                    return "Không có Tài khoản này";
                } 
				return checkList;
			}
		},
		/*-------------------------------[Post] UpdateCity------------------------------*/
		updateCity: {
			rest: {
				method: "POST",
				path: "/updateCity/"
			},
			params: {
                cityName: {type: "string"},
				idCountry: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {id, cityName, idCountry} = params;				 	
                const updateCity = await dbContext.THANHPHO.update(
					{
						TEN_THANHPHO: cityName,
						ID_QUOCGIA: idCountry				
					},
					{
						where: {ID_THANHPHO: id}
					}													
				);
				return updateCity;						
			}
		},
		/*-------------------------------[Get] DistrictById ------------------------------*/
		getIdDistrict: {
			rest: {
				method: "GET",
				path: "/getIdDistrict/"
			},
			async handler({action,params,meta, ... ctx}) {
				const {id} = params;
                const checkList = await dbContext.QUAN.findOne({
					where: {
						ID_QUAN: id
					}
				});
                if (checkList == null){
                    return "Không có Tài khoản này";
                } 
				return checkList;
			}
		},
		/*-------------------------------[Post] UpdateDistrict------------------------------*/
		updateDistrict: {
			rest: {
				method: "POST",
				path: "/updateDistrict/"
			},
			params: {
                districtName: {type: "string"},
				idCity: {type:"string"}
            },
			async handler({action,params,meta, ... ctx}) {
				const {id, districtName, idCity} = params;				 	
                const updateDistrict = await dbContext.QUAN.update(
					{
						TEN_QUAN: districtName,
						ID_THANHPHO: idCity			
					},
					{
						where: {ID_QUAN: id}
					}													
				);
				return updateDistrict;						
			}
		},
		/*-------------------------------[Get] List of Order ------------------------------*/
		getListOrder: {
			rest: {
				method: "GET",
				path: "/getListOrder"
			},		
			async handler({action,params,meta, ... ctx}) {
                const lstOrder = await dbContext.DATCANHO.findAll()
				return lstOrder
			}
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
