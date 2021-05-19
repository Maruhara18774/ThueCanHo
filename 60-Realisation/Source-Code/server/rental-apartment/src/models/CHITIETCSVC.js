const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHITIETCSVC', {
    ID_CT_CSVC: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_CSVC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CSVC',
        key: 'ID_CSVC'
      }
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
        name: "PK__CHITIETC__5133F4982A3E58A8",
        unique: true,
        fields: [
          { name: "ID_CT_CSVC" },
        ]
      },
    ]
  });
};
