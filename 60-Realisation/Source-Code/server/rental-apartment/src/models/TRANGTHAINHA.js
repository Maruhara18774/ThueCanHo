const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRANGTHAINHA', {
    ID_TRANGTHAI_NHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEN_TRANGTHAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TRANGTHAINHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TRANGTHA__87FDDF715ECA3500",
        unique: true,
        fields: [
          { name: "ID_TRANGTHAI_NHA" },
        ]
      },
    ]
  });
};
