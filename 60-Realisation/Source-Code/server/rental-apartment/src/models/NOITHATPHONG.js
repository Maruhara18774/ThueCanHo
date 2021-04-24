const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NOITHATPHONG', {
    ID_NOITHATPHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_CT_NOITHAT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CHITIETNOITHAT',
        key: 'ID_CT_NOITHAT'
      }
    },
    ID_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PHONG',
        key: 'ID_PHONG'
      }
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
        name: "PK__NOITHATP__F8626B3B131ED130",
        unique: true,
        fields: [
          { name: "ID_NOITHATPHONG" },
        ]
      },
    ]
  });
};
