const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHITIETCSVC', {
    ID_CT_CSVC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_CSVC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TEN_CSVC: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CHITIETCSVC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CHITIETC__5133F498D2110EBC",
        unique: true,
        fields: [
          { name: "ID_CT_CSVC" },
        ]
      },
    ]
  });
};
