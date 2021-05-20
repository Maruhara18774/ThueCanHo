"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const {MoleculerError} = require('moleculer').Errors;
const dbContext = require('../src/DBContext')();




module.exports = {
	name: "partner",

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
