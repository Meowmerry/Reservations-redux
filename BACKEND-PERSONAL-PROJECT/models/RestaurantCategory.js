"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantCategory = sequelize.define(
    "RestaurantCategory",
    {
      name: DataTypes.STRING
    },
    {}
  );
  RestaurantCategory.associate = models => {
    // associations can be defined here
    RestaurantCategory.hasMany(models.RestaurantList, {
      foreignKey: "restaurant_category_id"
    });
  };
  return RestaurantCategory;
};
