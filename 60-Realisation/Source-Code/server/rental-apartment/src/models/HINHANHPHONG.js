const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HINHANHPHONG', {
    ID_HINHANH_PHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_PHONG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PHONG',
        key: 'ID_PHONG'
      }
    },
    HINHANH: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HINHANHPHONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__HINHANHP__D9FCDE7B4CDF1914",
        unique: true,
        fields: [
          { name: "ID_HINHANH_PHONG" },
        ]
      },
    ]
  });
};
