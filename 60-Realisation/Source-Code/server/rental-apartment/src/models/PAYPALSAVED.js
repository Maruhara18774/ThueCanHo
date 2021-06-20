const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAYPALSAVED', {
    ID_SAVED: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_PAYMENT: {
      type: DataTypes.INTEGER,
      allowNull: true
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
        name: "PK__PAYPALSA__E6FD57B3133C23B3",
        unique: true,
        fields: [
          { name: "ID_SAVED" },
        ]
      },
    ]
  });
};
