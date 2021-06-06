const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUOCGIA', {
    ID_QUOCGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_QUOCGIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QUOCGIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__QUOCGIA__F62EAC4D1E0ED1D5",
        unique: true,
        fields: [
          { name: "ID_QUOCGIA" },
        ]
      },
    ]
  });
};
