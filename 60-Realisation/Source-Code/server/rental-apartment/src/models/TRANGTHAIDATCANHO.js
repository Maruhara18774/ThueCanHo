const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRANGTHAIDATCANHO', {
    ID_TT_DCH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_TRANGTHAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TRANGTHAIDATCANHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TRANGTHA__28801B35E8BAEE92",
        unique: true,
        fields: [
          { name: "ID_TT_DCH" },
        ]
      },
    ]
  });
};
