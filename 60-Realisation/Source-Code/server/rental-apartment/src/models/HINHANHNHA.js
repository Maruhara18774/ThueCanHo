const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HINHANHNHA', {
    ID_HINHANHNHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HINHANH: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HINHANHNHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__HINHANHN__B4B8C4961ABF8307",
        unique: true,
        fields: [
          { name: "ID_HINHANHNHA" },
        ]
      },
    ]
  });
};
