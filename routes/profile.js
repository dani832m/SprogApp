var express = require('express');
var router = express.Router();
var User = require('../public/javascripts/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findById(req.session.userId)
  .exec(function (error, user) {
  res.render('profile.hbs', { 
    name: user.username
   });
});
});

  // GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
