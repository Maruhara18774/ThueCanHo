var DataTypes = require("sequelize").DataTypes;
var _CHITIETCSVC = require("./CHITIETCSVC");
var _CHITIETNOITHAT = require("./CHITIETNOITHAT");
var _CSVC = require("./CSVC");
var _CSVCNHA = require("./CSVCNHA");
var _DANHGIA = require("./DANHGIA");
var _DATCANHO = require("./DATCANHO");
var _HINHANH = require("./HINHANH");
var _HINHANHNHA = require("./HINHANHNHA");
var _LOAIGIUONG = require("./LOAIGIUONG");
var _LOAINHA = require("./LOAINHA");
var _LOAIPHONG = require("./LOAIPHONG");
var _NHA = require("./NHA");
var _NOITHAT = require("./NOITHAT");
var _NOITHATPHONG = require("./NOITHATPHONG");
var _PAYPALSAVED = require("./PAYPALSAVED");
var _PHONG = require("./PHONG");
var _QUAN = require("./QUAN");
var _QUOCGIA = require("./QUOCGIA");
var _STYLE = require("./STYLE");
var _STYLENHA = require("./STYLENHA");
var _TAIKHOAN = require("./TAIKHOAN");
var _THANHPHO = require("./THANHPHO");
var _THONGTINCHUHO = require("./THONGTINCHUHO");
var _THONGTINKHACHHANG = require("./THONGTINKHACHHANG");
var _TRANGTHAIDATCANHO = require("./TRANGTHAIDATCANHO");
var _TRANGTHAINHA = require("./TRANGTHAINHA");

function initModels(sequelize) {
  var CHITIETCSVC = _CHITIETCSVC(sequelize, DataTypes);
  var CHITIETNOITHAT = _CHITIETNOITHAT(sequelize, DataTypes);
  var CSVC = _CSVC(sequelize, DataTypes);
  var CSVCNHA = _CSVCNHA(sequelize, DataTypes);
  var DANHGIA = _DANHGIA(sequelize, DataTypes);
  var DATCANHO = _DATCANHO(sequelize, DataTypes);
  var HINHANH = _HINHANH(sequelize, DataTypes);
  var HINHANHNHA = _HINHANHNHA(sequelize, DataTypes);
  var LOAIGIUONG = _LOAIGIUONG(sequelize, DataTypes);
  var LOAINHA = _LOAINHA(sequelize, DataTypes);
  var LOAIPHONG = _LOAIPHONG(sequelize, DataTypes);
  var NHA = _NHA(sequelize, DataTypes);
  var NOITHAT = _NOITHAT(sequelize, DataTypes);
  var NOITHATPHONG = _NOITHATPHONG(sequelize, DataTypes);
  var PAYPALSAVED = _PAYPALSAVED(sequelize, DataTypes);
  var PHONG = _PHONG(sequelize, DataTypes);
  var QUAN = _QUAN(sequelize, DataTypes);
  var QUOCGIA = _QUOCGIA(sequelize, DataTypes);
  var STYLE = _STYLE(sequelize, DataTypes);
  var STYLENHA = _STYLENHA(sequelize, DataTypes);
  var TAIKHOAN = _TAIKHOAN(sequelize, DataTypes);
  var THANHPHO = _THANHPHO(sequelize, DataTypes);
  var THONGTINCHUHO = _THONGTINCHUHO(sequelize, DataTypes);
  var THONGTINKHACHHANG = _THONGTINKHACHHANG(sequelize, DataTypes);
  var TRANGTHAIDATCANHO = _TRANGTHAIDATCANHO(sequelize, DataTypes);
  var TRANGTHAINHA = _TRANGTHAINHA(sequelize, DataTypes);

  CSVCNHA.belongsTo(CHITIETCSVC, { as: "ID_CT_CSVC_CHITIETCSVC", foreignKey: "ID_CT_CSVC"});
  CHITIETCSVC.hasMany(CSVCNHA, { as: "CSVCNHAs", foreignKey: "ID_CT_CSVC"});
  NOITHATPHONG.belongsTo(CHITIETNOITHAT, { as: "ID_CT_NOITHAT_CHITIETNOITHAT", foreignKey: "ID_CT_NOITHAT"});
  CHITIETNOITHAT.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_CT_NOITHAT"});
  CHITIETCSVC.belongsTo(CSVC, { as: "ID_CSVC_CSVC", foreignKey: "ID_CSVC"});
  CSVC.hasMany(CHITIETCSVC, { as: "CHITIETCSVCs", foreignKey: "ID_CSVC"});
  PAYPALSAVED.belongsTo(DATCANHO, { as: "ID_PAYMENT_DATCANHO", foreignKey: "ID_PAYMENT"});
  DATCANHO.hasMany(PAYPALSAVED, { as: "PAYPALSAVEDs", foreignKey: "ID_PAYMENT"});
  PHONG.belongsTo(LOAIGIUONG, { as: "ID_LOAIGIUONG_LOAIGIUONG", foreignKey: "ID_LOAIGIUONG"});
  LOAIGIUONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIGIUONG"});
  NHA.belongsTo(LOAINHA, { as: "ID_LOAINHA_LOAINHA", foreignKey: "ID_LOAINHA"});
  LOAINHA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_LOAINHA"});
  PHONG.belongsTo(LOAIPHONG, { as: "ID_LOAIPHONG_LOAIPHONG", foreignKey: "ID_LOAIPHONG"});
  LOAIPHONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIPHONG"});
  CSVCNHA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(CSVCNHA, { as: "CSVCNHAs", foreignKey: "ID_NHA"});
  DANHGIA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "ID_NHA"});
  DATCANHO.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_NHA"});
  HINHANHNHA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(HINHANHNHA, { as: "HINHANHNHAs", foreignKey: "ID_NHA"});
  PHONG.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_NHA"});
  STYLENHA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_NHA"});
  CHITIETNOITHAT.belongsTo(NOITHAT, { as: "ID_NOITHAT_NOITHAT", foreignKey: "ID_NOITHAT"});
  NOITHAT.hasMany(CHITIETNOITHAT, { as: "CHITIETNOITHATs", foreignKey: "ID_NOITHAT"});
  HINHANH.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
  PHONG.hasMany(HINHANH, { as: "HINHANHs", foreignKey: "ID_PHONG"});
  NOITHATPHONG.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
  PHONG.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_PHONG"});
  NHA.belongsTo(QUAN, { as: "ID_QUAN_QUAN", foreignKey: "ID_QUAN"});
  QUAN.hasMany(NHA, { as: "NHAs", foreignKey: "ID_QUAN"});
  STYLENHA.belongsTo(STYLE, { as: "ID_STYLE_STYLE", foreignKey: "ID_STYLE"});
  STYLE.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_STYLE"});
  QUAN.belongsTo(THANHPHO, { as: "ID_THANHPHO_THANHPHO", foreignKey: "ID_THANHPHO"});
  THANHPHO.hasMany(QUAN, { as: "QUANs", foreignKey: "ID_THANHPHO"});
  NHA.belongsTo(THONGTINCHUHO, { as: "ID_TT_CHUHO_THONGTINCHUHO", foreignKey: "ID_TT_CHUHO"});
  THONGTINCHUHO.hasMany(NHA, { as: "NHAs", foreignKey: "ID_TT_CHUHO"});
  DANHGIA.belongsTo(THONGTINKHACHHANG, { as: "ID_TT_KHACHHANG_THONGTINKHACHHANG", foreignKey: "ID_TT_KHACHHANG"});
  THONGTINKHACHHANG.hasMany(DANHGIA, { as: "DANHGIa", foreignKey: "ID_TT_KHACHHANG"});
  DATCANHO.belongsTo(THONGTINKHACHHANG, { as: "ID_TT_KHACHHANG_THONGTINKHACHHANG", foreignKey: "ID_TT_KHACHHANG"});
  THONGTINKHACHHANG.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_TT_KHACHHANG"});
  DATCANHO.belongsTo(TRANGTHAIDATCANHO, { as: "ID_TT_DCH_TRANGTHAIDATCANHO", foreignKey: "ID_TT_DCH"});
  TRANGTHAIDATCANHO.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_TT_DCH"});
  NHA.belongsTo(TRANGTHAINHA, { as: "ID_TRANGTHAI_NHA_TRANGTHAINHA", foreignKey: "ID_TRANGTHAI_NHA"});
  TRANGTHAINHA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_TRANGTHAI_NHA"});

  return {
    CHITIETCSVC,
    CHITIETNOITHAT,
    CSVC,
    CSVCNHA,
    DANHGIA,
    DATCANHO,
    HINHANH,
    HINHANHNHA,
    LOAIGIUONG,
    LOAINHA,
    LOAIPHONG,
    NHA,
    NOITHAT,
    NOITHATPHONG,
    PAYPALSAVED,
    PHONG,
    QUAN,
    QUOCGIA,
    STYLE,
    STYLENHA,
    TAIKHOAN,
    THANHPHO,
    THONGTINCHUHO,
    THONGTINKHACHHANG,
    TRANGTHAIDATCANHO,
    TRANGTHAINHA,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
