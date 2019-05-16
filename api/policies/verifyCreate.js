/**
 * verifyCreate
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any socket requests
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

    // create user matches session user, proceed to the next policy, 
    // or if this is the last policy, the controller
    if (req.params.all().user === req.session.me) {
        sails.log('match');
        return next();
    }
  
    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.forbidden('create failed: Incorrect user Id');
  };