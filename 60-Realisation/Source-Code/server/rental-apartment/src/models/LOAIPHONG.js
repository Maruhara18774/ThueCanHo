const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOAIPHONG', {
    ID_LOAIPHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_LOAIPHONG: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOAIPHONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LOAIPHON__A7E48F74ECD0D896",
        unique: true,
        fields: [
          { name: "ID_LOAIPHONG" },
        ]
      },
    ]
  });
};
