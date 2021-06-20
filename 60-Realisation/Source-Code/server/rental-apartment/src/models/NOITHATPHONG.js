const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NOITHATPHONG', {
    ID_NOITHATPHONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_CT_NOITHAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOLUONG: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NOITHATPHONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__NOITHATP__F8626B3B105B6F1E",
        unique: true,
        fields: [
          { name: "ID_NOITHATPHONG" },
        ]
      },
    ]
  });
};
