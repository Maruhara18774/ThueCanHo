const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STYLENHA', {
    ID_STYLENHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_STYLE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'STYLENHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__STYLENHA__EDFE0292A58D7E5F",
        unique: true,
        fields: [
          { name: "ID_STYLENHA" },
        ]
      },
    ]
  });
};
