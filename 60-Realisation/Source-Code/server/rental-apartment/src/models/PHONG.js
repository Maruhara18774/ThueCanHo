const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PHONG', {
    ID_PHONG: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
    },
    TEN_PHONG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ID_LOAIPHONG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LOAIPHONG',
        key: 'ID_LOAIPHONG'
      }
    },
    ID_LOAIGIUONG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LOAIGIUONG',
        key: 'ID_LOAIGIUONG'
      }
    },
    SOGIUONG: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    SONGUOITOIDA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    SOGIUONG_PHU: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    GIAGIUONG_PHU: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CHIEUDAI_PHONG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CHIEURONG_PHONG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SOLUONG: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PHONG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PHONG__C8E949A3A3F53C4B",
        unique: true,
        fields: [
          { name: "ID_PHONG" },
        ]
      },
    ]
  });
};
