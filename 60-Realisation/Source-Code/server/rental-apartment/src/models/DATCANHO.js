const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DATCANHO', {
    ID_DATCANHO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
    },
    NGAYDAT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CHECKIN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CHECKOUT: {
      type: DataTypes.STRING(5),
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
      allowNull: true,
      references: {
        model: 'TRANGTHAIDATCANHO',
        key: 'ID_TT_DCH'
      }
    }
  }, {
    sequelize,
    tableName: 'DATCANHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DATCANHO__3CB74E5332A32C1C",
        unique: true,
        fields: [
          { name: "ID_DATCANHO" },
        ]
      },
    ]
  });
};
