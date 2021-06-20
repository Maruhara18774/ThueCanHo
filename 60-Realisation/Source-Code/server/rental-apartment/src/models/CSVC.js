const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSVC', {
    ID_CSVC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
        name: "PK__CSVC__7F9012128C101A16",
        unique: true,
        fields: [
          { name: "ID_CSVC" },
        ]
      },
    ]
  });
};
