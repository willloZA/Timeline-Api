/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPosts: function (req, res) {
        if (!req.isSocket) {
            console.log('http rejected');
            return res.badRequest();
        }
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
                    console.log(err);
                    res.negotiate(err);
                });
                // res.json(postArr);
            })
            .catch((err) => {
                console.log(err);
                res.negotiate(err);
            });
    },
    createPost: function (req, res) {
        if (!req.isSocket) {
            console.log('http rejected');
            return res.badRequest();
        }

        //test via policy if logged in and user id provided with post matches req.session id
        
        console.log('create post: ' + req.params.all());
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
                        console.log(err);
                        res.negotiate(err);
                    });
            })
            .catch((err) => {
                console.log(err);
                res.negotiate(err);
            });
    },

    deletePost: function (req, res) {
        if (!req.isSocket) {
            console.log('http rejected');
            return res.badRequest();
        }

        Post.findOne({ id:req.param('id') })
            .then((post) => {
                if (post.user === req.session.me) {
                    Post.destroy({ id:req.param('id') })
                        .then((delPost) => {
                            Post.publishDestroy(delPost.id, req);
                            Comment.destroy({ post: delPost.id })
                                .then((delCommentArr) => {
                                    console.log(`Post ${delPost.id} and ${delCommentArr.length} comments deleted`);
                                    res.ok({ message: `post and comments deleted`});
                                })
                                .catch((err) => {
                                    console.log(`Error removing comments after removing post ${err}`)
                                    res.ok({ message: `post deleted`});
                                });
                        })
                        .catch((err) => {
                            console.log(err);
                            res.negotiate(err);
                        });
                        
                } else {
                    console.log(`${req.session.me} attempted to delete post ${req.param('id')} that isn't theirs`)
                    res.forbidden({ message: `failed to delete post`});
                }
            })
            .catch((err) => {
                console.log(err);
                res.negotiate(err);
            });
    }
};

