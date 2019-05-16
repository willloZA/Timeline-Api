/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPosts: function (req, res) {
        console.log('getting posts');
        Post.find()
            .populateAll()
            .then((postArr) => {
                /* generate array of comment arrays to associated with postArr 
                Promise.all should maintain order of comment arrays*/
                Promise.all(
                    /* generate array of promises to be returned by Promise.all */ 
                    postArr.map((post) => {
                        return Comment.find({ 
                            where: { post: post.id },
                            sort: 'createdAt DESC'
                        }).populate('user');
                    })
                )
                .then((commentArr) => {
                    let resp = [];
                    let postIds = [];
                    commentArr.map((arr) => {
                        arr.map((comm) => {
                            sails.hooks.filter.user(comm);
                            return comm;
                        });
                        return arr;
                    });
                    postArr.forEach((post, idx) => {
                        sails.hooks.filter.user(post);
                        post.comments = commentArr[idx];
                        resp.push(post);
                        postIds.push(post.id);
                    });
                    Post.watch(req);
                    Post.subscribe(req, postIds);
                    res.json(resp);
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
    createPost: function (req, res) {
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

    deletePost: function (req, res) {

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

