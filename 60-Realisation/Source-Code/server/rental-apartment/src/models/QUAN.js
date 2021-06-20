const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUAN', {
    ID_QUAN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_THANHPHO: {
      type: DataTypes.INTEGER,
      allowNull: true
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
        name: "PK__QUAN__E0775F03264823A8",
        unique: true,
        fields: [
          { name: "ID_QUAN" },
        ]
      },
    ]
  });
};
