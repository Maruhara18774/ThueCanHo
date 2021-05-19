const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUAN', {
    ID_QUAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_THANHPHO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'THANHPHO',
        key: 'ID_THANHPHO'
      }
    },
    TEN_QUAN: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QUAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__QUAN__E0775F033E70E4B1",
        unique: true,
        fields: [
          { name: "ID_QUAN" },
        ]
      },
    ]
  });
};
