const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DANHGIA', {
    ID_DANHGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_TT_KHACHHANG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'THONGTINKHACHHANG',
        key: 'ID_TT_KHACHHANG'
      }
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
    },
    SOSAO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    NOIDUNG: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DANHGIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DANHGIA__D7D8AB78EEA66761",
        unique: true,
        fields: [
          { name: "ID_DANHGIA" },
        ]
      },
    ]
  });
};
