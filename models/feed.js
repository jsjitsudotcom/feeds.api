"use strict";
module.exports = (sequelize, DataTypes) => {
  const feed = sequelize.define(
    "feed",
    {
      name: DataTypes.STRING,
      rss_url: DataTypes.STRING,
      website_url: DataTypes.STRING,
      is_default: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "feed"
    }
  );

  feed.associate = function(models) {
    models.feed.belongsToMany(models.user, {
      through: models.user_to_feed,
      as: "users",
      foreignKey: "feed_id",
      otherKey: "user_id"
    });
  };

  return feed;
};
