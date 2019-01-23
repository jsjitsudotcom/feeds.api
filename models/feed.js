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
    // associations can be defined here
  };

  return feed;
};
