const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOAIGIUONG', {
    ID_LOAIGIUONG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_LOAIGIUONG: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOAIGIUONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LOAIGIUO__CECA971A251B252E",
        unique: true,
        fields: [
          { name: "ID_LOAIGIUONG" },
        ]
      },
    ]
  });
};
