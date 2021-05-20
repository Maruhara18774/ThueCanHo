const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NOITHAT', {
    ID_NOITHAT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_NOITHAT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NOITHAT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__NOITHAT__EAB2002D54C0D086",
        unique: true,
        fields: [
          { name: "ID_NOITHAT" },
        ]
      },
    ]
  });
};
