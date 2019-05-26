/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function (req, res) {
        console.log('getting posts');
        Post.getTimeline()
            .then(function(respArr) {
                // sails.log(respArr[0]);
                Post.watch(req);
                Post.subscribe(req, respArr[1]);
                res.json(respArr[0]);
            })
            .catch(function(err) {
                sails.log.error(err);
                res.negotiate(err);
            });
    },
    create: function (req, res) {
        console.log('post create: ', req.params.all());

        Post.create(req.params.all())
            .then((newPost) => {
                Post.findOne({ id: newPost.id })
                    .populateAll()
                    .then((post) => {
                        sails.hooks.filter.user(post);
                        Post.publishCreate(post,req);
                        res.created(post);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.negotiate(err);
                    });
            })
            .catch((err) => {
                console.error(err);
                res.negotiate(err);
            });
    },
    destroy: function (req, res) {
        sails.log('destroy')
        Post.destroy({ id:req.param('id') })
            .then((delPostArr) => {
                Post.publishDestroy(delPostArr[0].id, req);
                Comment.destroy({ post: delPostArr[0].id })
                    .then((delCommentArr) => {
                        console.log(`Post ${delPostArr[0].id} and ${delCommentArr.length} comments deleted`);
                        res.ok({ message: `post and comments deleted`});
                    })
                    .catch((err) => {
                        console.error(`Error removing comments removing comments from post ${err}`)
                        res.ok({ message: `post deleted`});
                    });
            })
            .catch((err) => {
                console.error(err);
                res.negotiate(err);
            });
    }
};

