"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
 const {MoleculerError} = require('moleculer').Errors;
 const dbContext = require('../src/DBContext')();
module.exports = {
	name: "intergration",

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
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler() {
				return "Hello Moleculer";
			}
		},
		getPartnerHouseAddress: {
			rest: {
				method: "POST",
				path: "/getPartnerHouseAddress"
			},
			params:{
				idPartner: {type: "string"}
			},
			async handler({action,params,meta, ... ctx}) {
				const {idPartner} = params;
				const lsApartment = await dbContext.NHA.findAll({
					where: {
						ID_TT_CHUHO: idPartner,
					},
					include: ["ID_QUAN_QUAN"],
				});
				const lsCity = await dbContext.THANHPHO.findAll();
				const lsCountry = await dbContext.QUOCGIA.findAll();
				var result = [];
				lsApartment.forEach(element => {
					var myCity, myCountry;
					lsCity.forEach(tp =>{
						if(tp.ID_THANHPHO == element.ID_QUAN_QUAN.ID_THANHPHO){
							myCity = tp;
						}
					})
					lsCountry.forEach(qg =>{
						if(qg.ID_QUOCGIA == myCity.ID_QUOCGIA){
							myCountry = qg;
						}
					})
					const output = element.SONHA+" "+element.TEN_DUONG+" "+element.ID_QUAN_QUAN.TEN_QUAN+" "+myCity.TEN_THANHPHO+" "+myCountry.TEN_QUOCGIA;
					const output2 = element.ID_NHA+" " +output;
					result.push({
						ID_NHA: element.ID_NHA,
						DIACHI_1: output,
						DIACHI_2:output2
					})
				});
				
				return result;
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
