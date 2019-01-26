"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_to_feed = sequelize.define(
    "user_to_feed",
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id"
        }
      },
      feed_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "feed",
          key: "id"
        }
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
      tableName: "user_to_feed"
    }
  );

  return user_to_feed;
};
