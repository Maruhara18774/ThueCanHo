const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHITIETNOITHAT', {
    ID_CT_NOITHAT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NOITHAT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NOITHAT',
        key: 'ID_NOITHAT'
      }
    },
    TEN_CT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CHITIETNOITHAT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CHITIETN__2F2E603E1DC79910",
        unique: true,
        fields: [
          { name: "ID_CT_NOITHAT" },
        ]
      },
    ]
  });
};
