const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
module.exports = (app, db) => {
  app.get("/reserves", (req, res) => {
    db.reserve
      .findAll()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        console.log({ err });
        res.status(400).json();
      });
  });

  app.post(
    "/reserve",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const userID = req.user.id;
      const restaurantID = req.body.restaurantID;
      const date = req.body.date;
      const partySize = req.body.partySizes;
      const time = req.body.times;
      console.log({restaurantID})
      // console.log(new Date(date))
      db.reserve
        .create({
          date,
          partySize,
          time,
          user_id: userID,
          restaurant_id: restaurantID
        })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          console.log(err);
          res.status(400).send(err.message);
        });
    }
  );
};
