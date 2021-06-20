const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOAINHA', {
    ID_LOAINHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_LOAINHA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOAINHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LOAINHA__CFAA6ACDA90465B2",
        unique: true,
        fields: [
          { name: "ID_LOAINHA" },
        ]
      },
    ]
  });
};
