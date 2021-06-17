const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRANGTHAIDATCANHO', {
    ID_TT_DCH: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
        name: "PK__TRANGTHA__28801B35F1097428",
        unique: true,
        fields: [
          { name: "ID_TT_DCH" },
        ]
      },
    ]
  });
};
