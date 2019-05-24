/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    message : { type: 'string', required: true },

    user    : { model: 'user', required: true },

    comments: { collection: 'comment', via: 'post' }

  },

  getTimeline: function () {
    /* Find all posts, comments need user model populated manually
    |* due to lack of deep population */
    return new Promise(function (resolve, reject) {
      Post.find()
        .populateAll()
        .then( function(postArr) {
          // post id array for subscribe
          let ids = [];
          let popPostArr = [];
          // if no posts exist then return postArr as resolved
          if (postArr.length === 0) resolve([postArr, ids]);

          /* create array of posts with populated post.comments[idx].user property
          |* move filtering of user into user model method
          |* ( should this be done without mutation?) */
          // use asyn each here too
          async.eachSeries(function(post, cb1) {
            sails.hooks.filter.user(post);
            ids.push(post.id);

            // return post if it doesn't have comments associated to it
            if (post.comments.length === 0) {
              popPostArr.push(post);
              cb1();
            } else {
              async.each(post.comments, function(comment, cb2) {
                User.findOne({id: comment.user})
                  .then((user) => {
                    comment.user = user;
                    sails.hooks.filter.user(comment);
                    cb2();
                  })
                  .catch((err) => {
                    cb2(err);
                  });
              }, function(err) {
                if (err) reject(err);
                popPostArr.push(post);
                cb1();
              });
            }
          });
          popPostArr.sort(function(a, b) { a.createdAt - b.createdAt});
          sails.log('post arr', popPostArr);
          resolve([popPostArr, ids]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

