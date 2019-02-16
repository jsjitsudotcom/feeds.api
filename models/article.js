"use strict";
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define(
    "article",
    {
      feed_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "feed",
          key: "id"
        }
      },
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      url: DataTypes.STRING,
      published_at: DataTypes.DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "article"
    }
  );

  article.associate = function() {
    // associations can be defined here
  };

  return article;
};
