"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantList = sequelize.define(
    "RestaurantList",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  );
  RestaurantList.associate = models => {
    // associations can be defined here
    RestaurantList.belongsToMany(models.restaurant, {
      foreignKey: "restaurant_list_id",
      through: models.RestaurantHas
    });
    RestaurantList.belongsTo(models.RestaurantCategory, {
      foreignKey: "restaurant_category_id"
    });
  };
  return RestaurantList;
};
