const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BANGGIA', {
    ID_BANGGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MUCGIA_MOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MUCGIA_HAI: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MUCGIA_BA: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BANGGIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__BANGGIA__3342FE05AC30EE14",
        unique: true,
        fields: [
          { name: "ID_BANGGIA" },
        ]
      },
    ]
  });
};
