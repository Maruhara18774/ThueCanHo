const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THANHPHO', {
    ID_THANHPHO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_THANHPHO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'THANHPHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__THANHPHO__F7B256BB917CB8D0",
        unique: true,
        fields: [
          { name: "ID_THANHPHO" },
        ]
      },
    ]
  });
};
