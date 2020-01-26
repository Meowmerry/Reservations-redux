module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    username: {
      type: DataTypes.STRING(255)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    name: {
      type: DataTypes.STRING(100)
    },
    role: {
      defaultValue:'USER',
      type: DataTypes.ENUM("owner", "user")
    }
  });

  user.associate = models => {
    user.belongsToMany(models.restaurant, {
      foreignKey: "user_id",
      through: {
        model: models.reserve,
        unique: false
      },
      as: "user"
    });
    user.hasMany(models.restaurant, { foreignKey: "user_id" });
  };

  return user;
};
