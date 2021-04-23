const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STYLENHA', {
    ID_STYLENHA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
    },
    ID_STYLE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'STYLE',
        key: 'ID_STYLE'
      }
    }
  }, {
    sequelize,
    tableName: 'STYLENHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__STYLENHA__EDFE0292A5CB079A",
        unique: true,
        fields: [
          { name: "ID_STYLENHA" },
        ]
      },
    ]
  });
};
