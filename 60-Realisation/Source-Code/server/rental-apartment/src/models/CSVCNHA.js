const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSVCNHA', {
    ID_CSVC_NHA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_CT_CSVC: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CHITIETCSVC',
        key: 'ID_CT_CSVC'
      }
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SOLUONG: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CSVCNHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CSVCNHA__4BFFADB9140D4DA9",
        unique: true,
        fields: [
          { name: "ID_CSVC_NHA" },
        ]
      },
    ]
  });
};
