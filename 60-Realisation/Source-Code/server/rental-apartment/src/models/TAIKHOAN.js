const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAIKHOAN', {
    ID_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TEN_TAIKHOAN: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ__TAIKHOAN__6B714C8EE9DB15DD"
    },
    MATKHAU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ROLE_TAIKHOAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAIKHOAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UQ__TAIKHOAN__6B714C8EE9DB15DD",
        unique: true,
        fields: [
          { name: "TEN_TAIKHOAN" },
        ]
      },
    ]
  });
};
