"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "user",
      paranoid: true
    }
  );

  user.associate = function(models) {
    models.user.belongsToMany(models.feed, {
      through: models.user_to_feed,
      as: "feeds",
      foreignKey: "user_id",
      otherKey: "feed_id"
    });
  };

  return user;
};
