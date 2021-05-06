const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOAIPHONG', {
    ID_LOAIPHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
        name: "PK__LOAIPHON__A7E48F74666873BC",
        unique: true,
        fields: [
          { name: "ID_LOAIPHONG" },
        ]
      },
    ]
  });
};
