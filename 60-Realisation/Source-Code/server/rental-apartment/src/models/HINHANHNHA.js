const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HINHANHNHA', {
    ID_HINHANHNHA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
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
        name: "PK__HINHANHN__B4B8C496BA525D09",
        unique: true,
        fields: [
          { name: "ID_HINHANHNHA" },
        ]
      },
    ]
  });
};
