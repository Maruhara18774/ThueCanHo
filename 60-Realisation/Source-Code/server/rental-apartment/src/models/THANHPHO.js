const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THANHPHO', {
    ID_THANHPHO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_QUOCGIA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'QUOCGIA',
        key: 'ID_QUOCGIA'
      }
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
        name: "PK__THANHPHO__F7B256BB32299B4E",
        unique: true,
        fields: [
          { name: "ID_THANHPHO" },
        ]
      },
    ]
  });
};
