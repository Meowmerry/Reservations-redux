module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.STRING(255)
    },
    restaurantName: {
      type: DataTypes.STRING(255)
    },
    phoneNumber: {
      type: DataTypes.STRING(255)
    },
    country: {
      type: DataTypes.STRING(255)
    },
    city: {
      type: DataTypes.STRING(255)
    }
  });
  Restaurant.associate = models => {
    Restaurant.belongsToMany(models.user, {
      foreignKey: "restaurant_id",
      through: {
        model: models.reserve,
        unique: false
      },
      as: "user"
    });

    Restaurant.belongsToMany(models.RestaurantList, {
      foreignKey: "restaurant_id",
      through: models.RestaurantHas
    });
  };

  return Restaurant;
};
