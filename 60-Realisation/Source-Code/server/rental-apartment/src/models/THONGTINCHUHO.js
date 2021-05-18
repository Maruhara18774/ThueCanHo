const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THONGTINCHUHO', {
    ID_TT_TAIKHOAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_CHUHO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MA_GIAYTOTUYTHAN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LOAI_GIAYTOTUYTHAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QUOCTICH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GIOITINH: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DIACHI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MASO_THUE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ID_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAIKHOAN',
        key: 'ID_TAIKHOAN'
      }
    }
  }, {
    sequelize,
    tableName: 'THONGTINCHUHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__THONGTIN__66F3ACF4C0C2250D",
        unique: true,
        fields: [
          { name: "ID_TT_TAIKHOAN" },
        ]
      },
    ]
  });
};
