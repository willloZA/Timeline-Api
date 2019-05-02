/**
 * res.login([inputs])
 *
 * @param {String} inputs.email
 * @param {String} inputs.password
 *
 * @description :: Log the requesting user in using a passport strategy
 * @help        :: See http://links.sailsjs.org/docs/responses
 */

module.exports = function login(inputs) {
    inputs = inputs || {};

    // Get access to `req` and `res`
    let req = this.req;
    let res = this.res;

    // Look up the user
    User.attemptLogin({
        email: inputs.email,
        password: inputs.password
    }, function (err, user) {
        if (err) {
            console.error('error',err)
            return res.negotiate(err);
        } else if (!user) {
            console.error('invalid')
            return res.badRequest('Invalid email/password combination.');
        } else {
            sails.hooks.filter.user(user);
            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            req.session.me = user.id;
            return res.ok({message: 'logged in', user: user});
        }

    });
};
  