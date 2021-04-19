const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSVC', {
    ID_CSVC: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_CSVC: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CSVC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CSVC__7F9012123D19F7B6",
        unique: true,
        fields: [
          { name: "ID_CSVC" },
        ]
      },
    ]
  });
};
