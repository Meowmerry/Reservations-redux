const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const cors = require("cors");
const passport = require("passport");
const app = express();

const restaurantService = require("./services/Restaurant");
const resversService = require("./services/Reverse");
const userService = require("./services/User");
const restaurantListService = require("./services/RestaurantList");

app.use(passport.initialize());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/passport/passport");

db.sequelize.sync({ alter: false }).then(() => {
  userService(app, db);
  restaurantService(app, db);
  resversService(app, db);
  restaurantListService(app, db);

  app.get("/restaurant", async (req, res) => {
    let restaurantList = await db.RestaurantList.findAll();
    res.json(restaurantList);
  });

  app.get("/restaurant-category", async (req, res) => {
    let restaurantCategoryList = await db.RestaurantCategory.findAll();
    res.json(restaurantCategoryList);
  });

  app.listen(8080, () => {
    console.log(" Server is listening on port 8080 ");
  });
});
