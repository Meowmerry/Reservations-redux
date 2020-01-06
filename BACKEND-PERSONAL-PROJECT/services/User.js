const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config/passport/passport");
const bcrypt = require("bcryptjs");

module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', async (err, user, info) => {
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        user.update({
          name: req.body.name,
          role: "user",
        })
          .then(result => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' });
          })
          .catch(err => {
            console.error(err)
            res.status(400).send({ message: err.message })
          })

      }
    })(req, res, next);
  });


  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === 'bad username') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {

        const token = jwt.sign({id: user.id,role: user.role,name: user.name,},
          config.secretOrKey, {
          expiresIn: 3600,
        });

        res.status(200).send({
          auth: true,
          token,
          message: 'user found & logged in',
        });

      }
    })(req, res, next);
  });
 
  app.put(
    "/change-password",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {

      let targetUser = await db.user.findOne({
        where: { id: req.user.id }
      });
      if (!targetUser) {
        res.status(404).send("user not found");
      } else {
        bcrypt.compare(req.body.oldPassword, req.user.password, function(
          err,
          response
        ) {
          if (!response) {
            res.status(401).send("your old password is wrong.");
          }
        });
        let salt = bcrypt.genSaltSync(config.BCRYPT_SALT_ROUNDS);
        let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
        targetUser.update({
          password: hashedPassword
        });
        res.send("Your password has been changed.");
      }
    }
  );
  
};