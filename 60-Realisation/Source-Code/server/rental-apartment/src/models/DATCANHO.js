const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DATCANHO', {
    ID_DATCANHO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_TT_KHACHHANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NGAYDAT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CHECKIN: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CHECKOUT: {
      type: DataTypes.TIME,
      allowNull: true
    },
    NGAY_DEN: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NGAY_DI: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    TONGTIEN_PHONG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    BUASANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TONGTIEN_BUASANG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SO_GIUONGPHU: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TONGTIEN_GIUONGPHU: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PHI_GTGT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TONGTIEN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GHICHU: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ID_TT_DCH: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DATCANHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DATCANHO__3CB74E539B3D4E06",
        unique: true,
        fields: [
          { name: "ID_DATCANHO" },
        ]
      },
    ]
  });
};
