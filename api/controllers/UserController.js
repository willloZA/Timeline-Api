/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
    rest: false
  },


  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    sails.log(req.session)
    if (req.session && req.session.me) {
      console.log('session exists')
      return res.ok({ message: `already logged in`})
    } else {
      return res.login({
        email   : req.param('email'),
        password: req.param('password')
      });
    }
  },

  /**
   * `UserController.test()`
   */
  test: function (req, res) {
    // should be policy?
    if (req.session.me === req.param('id')) {
      return res.ok({ message: `already logged in`})
    } else {
      // clear session and return 403
      req.session.me = null;
      return res.forbidden('not logged in')
    }
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    // "Forget" the user from the session.
    // Subsequent requests from this user agent will NOT have `req.session.me`.
    req.session.me = null;
    return res.ok({ message: 'Logged out successfully.' });
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

    User.create(req.params.all())
      .then((user) => {

      // Go ahead and log this user in as well.
      // We do this by "remembering" the user in the session.
      // Subsequent requests from this user agent will have `req.session.me` set.
      req.session.me = user.id;
      sails.hooks.filter.user(user);
      console.log(`User ${user.firstName} created!`)
      return res.ok({ user: user, message:'Signup successful' });
    })
    .catch((err) => {
      console.error(err);
      return res.negotiate(err);
    });
  }
};

