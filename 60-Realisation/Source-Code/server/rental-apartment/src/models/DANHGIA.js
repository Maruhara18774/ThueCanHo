const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DANHGIA', {
    ID_DANHGIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_TT_KHACHHANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SOSAO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    NOIDUNG: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DANHGIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DANHGIA__D7D8AB788079CAFC",
        unique: true,
        fields: [
          { name: "ID_DANHGIA" },
        ]
      },
    ]
  });
};
