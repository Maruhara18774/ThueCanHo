const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAYPALSAVED', {
    ID_SAVED: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_PAYMENT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DATCANHO',
        key: 'ID_DATCANHO'
      }
    },
    ID_TRANSACTION: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PAYPALSAVED',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PAYPALSA__E6FD57B39F644554",
        unique: true,
        fields: [
          { name: "ID_SAVED" },
        ]
      },
    ]
  });
};
