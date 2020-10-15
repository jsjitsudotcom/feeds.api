"use strict";
module.exports = (sequelize, DataTypes) => {
  const bookmark = sequelize.define(
    "bookmark",
    {
      article_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "article",
          key: "id"
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id"
        }
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "bookmark"
    }
  );

  bookmark.associate = function() {
    // associations can be defined here
  };

  return bookmark;
};
