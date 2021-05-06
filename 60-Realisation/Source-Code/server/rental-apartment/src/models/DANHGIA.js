const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DANHGIA', {
    ID_DANHGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAIKHOAN',
        key: 'ID_TAIKHOAN'
      }
    },
    THUTU_NHA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'THUTU_NHA'
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
        name: "PK__DANHGIA__D7D8AB78EC9E2018",
        unique: true,
        fields: [
          { name: "ID_DANHGIA" },
        ]
      },
    ]
  });
};
