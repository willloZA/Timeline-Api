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
    let users = {};

    function getCommentUser(comm) {

      return new Promise(function(resolve, reject) {
        if (comm.user in users) {
          resolve(users[comm.user]);
        } else {
          User.findOne({ id: comm.user })
            .then(function(user) {
              // add to object to allow usage of user filter
              let obj = { user: user };
              sails.hooks.filter.user(obj);

              // cache user details to avoid unnecessary finds
              users[user.id] = obj.user;
              resolve(obj.user)
            })
            .catch(function(err) {
              reject(err);
            });
        }
      });
    }

    /* return all posts with comments user model populated manually
    |* due to lack of deep population */
    return new Promise(function (resolve, reject) {
      Post.find()
        // sub criteria not available with populateAll, test populate chaining
        .populateAll()
        .then(async function(postArr) {
          // post id array for subscribe
          let postIds = [],
              popPostArr = [];
          // if no posts exist then return postArr as resolved
          if (postArr.length === 0) resolve([postArr, postIds]);

          /* create array of posts with populated post.comments[idx].user property
          |* move filtering of user into user model method */
          for (let post of postArr) {
            // store post ids to allow for easier socket subscription
            postIds.push(post.id);

            // filter post user data
            sails.hooks.filter.user(post);

            // populate comments if present
            if (post.comments.length !== 0) {

              for (let comment of post.comments) {
                comment.user = await getCommentUser(comment)
                  .catch(function(err) {
                    reject(err);
                  });
              };
              post.comments.reverse();
            }
            popPostArr.push(post);
          };
          
        
          // popPostArr.sort(function(a, b) { a.createdAt - b.createdAt});
          // sails.log('post arr', popPostArr);
          resolve([popPostArr, postIds]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

