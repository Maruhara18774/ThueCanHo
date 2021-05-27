/* eslint-disable no-unused-vars */
"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const { MoleculerError } = require("moleculer").Errors;
const dbContext = require("../src/DBContext")();

module.exports = {
	name: "partner",

	/**
	 * Settings
	 */
	settings: {},

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
				path: "/signin",
			},
			params: {
				username: { type: "string", min: 3 },
				password: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { username, password } = params;
				if (!username && !password) {
					throw new MoleculerError("Không có người dùng này");
				}
				// Test 1: http://localhost:3000/api/partner/signin?username=demo1&password=abc123
				const checkUser = await dbContext.TAIKHOAN.findOne({
					where: {
						TEN_TAIKHOAN: username,
						MATKHAU: password,
					},
				});
				if (checkUser == null) {
					return "Không có người dùng này";
				} else {
					return checkUser.ID_TAIKHOAN;
				}
			},
		},
		contactRegistration: {
			rest: {
				method: "POST",
				path: "/registrationDetail/contactRegistration",
			},
			params: {
				fullName: { type: "string" },
				email: { type: "string" },
				phoneNumber: { type: "string" },
				idenCode: { type: "string" },
				idenType: { type: "string" },
				country: { type: "string" },
				gender: { type: "string" },
				address: { type: "string" },
				taxCode: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					fullName,
					email,
					phoneNumber,
					idenCode,
					idenType,
					country,
					gender,
					address,
					taxCode,
				} = params;

				const createUser = await dbContext.THONGTINCHUHO.create({
					TEN_CHUHO: fullName,
					EMAIL: email,
					PHONE_NUMBER: phoneNumber,
					MA_GIAYTOTUYTHAN: idenCode,
					LOAI_GIAYTOTUYTHAN: idenType,
					QUOCTICH: country,
					GIOITINH: gender,
					DIACHI: address,
					MASO_THUE: taxCode,
				});
				return createUser;
			},
		},
		register: {
			rest: {
				method: "POST",
				path: "/register",
			},
			params: {
				username: { type: "string", min: 3 },
				password: { type: "string", min: 6 },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { username, password } = params;
				if (!username && !password) {
					throw new MoleculerError(
						"Username and Password is incorrect"
					);
				}
				//http://localhost:3000/api/user/sigin/signin?username=b@gmail.com&password=1111111
				const createUser = await dbContext.TAIKHOAN.create({
					TEN_TAIKHOAN: username,
					MATKHAU: password,
				});
				return createUser;
			},
		},
		getListStyle: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListStyle",
			},
			async handler() {
				const getList = await dbContext.STYLE.findAll();
				return getList;
			},
		},
		getDetailApartment: {
			rest: {
				method: "GET",
				path: "/registrationDetail/getDetailApartment",
			},
			async handler({ action, params, meta, ...ctx }) {
				const { id } = params;
				const checkDetail = await dbContext.NHA.findAll({
					where: {
						ID_NHA: id,
					},
				});
				if (checkDetail == null) {
					return "Không có căn hộ này";
				}
				return checkDetail;
			},
		},
		getListPropFaci: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListPropFaci",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.CSVC.findAll({
					include: ["CHITIETCSVC"],
				});
				return getList;
			},
		},
		getListHouseFaci: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListHouseFaci",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.CSVCNHA.findAll();
				return getList;
			},
		},
		getListRoomFacility: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListRoomFacility",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getList = await dbContext.NOITHAT.findAll({
					include: ["CTNT"],
				});
				return getList;
			},
		},
		getRoomType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getRoomType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIPHONG.findAll();
				return getType;
			},
		},
		getBedType: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getBedType",
			},
			async handler({ action, params, meta, ...ctx }) {
				const getType = await dbContext.LOAIGIUONG.findAll();
				return getType;
			},
		},
		getListCountry: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListCountry",
			},
			async handler(ctx) {
				const listCountry = dbContext.THANHPHO.findAll();
				return listCountry;
			},
		},
		getListCity: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListCity",
			},
			params: {
				countryId: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { countryId } = params;
				const listCity = dbContext.THANHPHO.findAll({
					where: {
						ID_QUOCGIA: countryId,
					},
				});
				return listCity;
			},
		},
		getListDistrict: {
			rest: {
				method: "POST",
				path: "/registrationDetail/getListDistrict",
			},
			params: {
				cityId: { type: "string" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const { cityId } = params;
				const checkCity = await dbContext.QUAN.findAll({
					where: {
						ID_THANHPHO: cityId,
					},
				});
				return checkCity;
			},
		},
		createApartment: {
			rest: {
				method: "POST",
				path: "/registrationDetail/createApartment",
			},
			params: {
				idNha: { type: "string" },
				idChuHo: { type: "number" },
				idLoaiNha: { type: "number" },
				tenNha: { type: "string" },
				huyPhong: { type: "boolean" },
				checkIn: { type: "string", format: "time" },
				checkOut: { type: "string", format: "time" },
				khoangCachTT: { type: "number" },
				soTang: { type: "number" },
				buaSang: { type: "number" },
				soNha: { type: "string" },
				tenDuong: { type: "string" },
				dienTich: { type: "number" },
				idQuan: { type: "number" },
				soNguoi: { type: "number" },
				soGiuongPhu: { type: "number" },
				idGia: { type: "number" },
				trangThai: { type: "number" },
			},
			async handler({ action, params, meta, ...ctx }) {
				const {
					idNha,
					idChuHo,
					idLoaiNha,
					tenNha,
					huyPhong,
					checkIn,
					checkOut,
					khoangCachTT,
					soTang,
					buaSang,
					soNha,
					tenDuong,
					dienTich,
					idQuan,
					soNguoi,
					soGiuongPhu,
					idGia,
					trangThai,
				} = params;
				const createApartment = await dbContext.NHA.create({
					ID_NHA: idNha,
					ID_TT_CHUHO: idChuHo,
					ID_LOAINHA: idLoaiNha,
					TEN_NHA: tenNha,
					FREE_CANCEL: huyPhong,
					CHECKIN: checkIn,
					CHECKOUT: checkOut,
					KHOANGCACH_TRUNGTAMTP: khoangCachTT,
					SOTANG: soTang,
					PHUPHI_BUASANG: buaSang,
					SONHA: soNha,
					TEN_DUONG: tenDuong,
					DIENTICH: dienTich,
					ID_QUAN: idQuan,
					SO_NGUOI: soNguoi,
					SO_GIUONGPHU: soGiuongPhu,
					ID_BANGGIA: idGia,
					ID_TRANGTHAI_NHA: trangThai
				});
				return createApartment;
			},
		},
		createPrice: {
			rest: {
				method: "POST",
				path: "/registrationDetail/createPrice",
			},
			params: {
				firstPrice: {type: "number"},
				secondPrice: {type: "number"},
				thirdPrice: {type: "number"}
			},
			async handler({ action, params, meta, ...ctx }) {
				const { firstPrice, secondPrice, thirdPrice } = params;
				const create = await dbContext.BANGGIA.create({
					MUCGIA_MOT: firstPrice,
					MUCGIA_HAI: secondPrice,
					MUCGIA_BA: thirdPrice,
				});
				return create;
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
				name: "string",
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
