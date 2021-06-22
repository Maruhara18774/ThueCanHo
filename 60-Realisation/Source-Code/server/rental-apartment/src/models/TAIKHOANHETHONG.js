const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAIKHOANHETHONG', {
    ID_TAIKHOAN_HT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TEN_TAIKHOAN_HT: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ__TAIKHOAN__02E4AC46EFAC8D48"
    },
    MATKHAU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ROLE_TAIKHOAN_HT: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAIKHOANHETHONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UQ__TAIKHOAN__02E4AC46EFAC8D48",
        unique: true,
        fields: [
          { name: "TEN_TAIKHOAN_HT" },
        ]
      },
    ]
  });
};
