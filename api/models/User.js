/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcryptjs');

module.exports = {

  attributes: {

    email       : { type: 'String', required: true, unique: true, email: true },

    firstName   : { type: 'String', required: true, minLength: 1, maxLength: 30, alpha: true },

    lastName    : { type: 'String', required: true, minLength: 1, maxLength: 30, alpha: true },

    password    : { type: 'String', required: true, minLength: 6 },

    posts       : { collection: 'post', via: 'user' }

  },

  // only applied if model is returned via res.json()
  toJSON: function() {
    var obj = this.toObject();
    console.log('to Json return middleware')
    delete obj.password;
    return obj;
  },

  /**
 * Create a new user using the provided inputs,
 * but encrypt the password first.
 *
 * @param  {Object}   inputs
 *                     • email      {String}
 *                     • firstName  {String}
 *                     • lastName   {String}
 *                     • password   {String}
 * @param  {Function} cb
 */

  beforeCreate: function (inputs, cb) {

    // Hash password
    bcrypt.hash(inputs.password, 12, function(err, hash) {
      if(err) return cb(err);
      inputs.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  },

  /**
   * Check validness of a login using the provided inputs.
   * But encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   */

  attemptLogin: function (inputs, cb) {
    console.log(inputs)
    // Find a user
    User.findOne({ email: inputs.email})
      .then((user) => {
      // Hash the plaintext password.
      // (https://www.npmjs.com/package/bcryptjs)
        if (user) {
          bcrypt.compare(inputs.password, user.password)
            .then((resp) => {
              //see toJSON
              delete user.password;
              console.log(user);
              console.log(resp);
              //if matching password return user, else return false as error
              if (resp) {
                console.log('matched')
                cb(null, user)
              } else {
                console.log('not matched')
                cb(null, resp);
              }
            })
        } else {
          cb(null, user);
        }
      },(err) => cb(err, null));
  }
};

