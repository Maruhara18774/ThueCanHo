const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STYLE', {
    ID_STYLE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_STYLE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'STYLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__STYLE__DEC2FA91124C76D1",
        unique: true,
        fields: [
          { name: "ID_STYLE" },
        ]
      },
    ]
  });
};
