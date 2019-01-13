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
    // associations can be defined here
  };

  return user;
};
