/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    createComment: function (req, res) {
        console.log('comment create', req.params.all());
        if (!req.isSocket) {
            console.log('http rejected');
            return res.badRequest();
        }

        //test via policy if logged in and user id provided with post matches req.session id
        if (req.params.all().user !== req.session.me) {
            console.log(`${req.session.me} attempted to create comment using user id ${req.params.all().user}`);
                res.forbidden({ message: 'create comment failed: Incorrect user Id'});
        }

        Comment.create(req.params.all())
            .then((newComment) => {
                Comment.findOne({ id: newComment.id })
                    .populate('user')
                    .then((comment) => {
                        sails.hooks.filter.user(comment);
                        newComment.user = comment.user;
                        Post.publishAdd(newComment.post, 'comments', newComment, req);
                        res.created(comment);
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
    
    deleteComment: function (req, res) {
        if (!req.isSocket) {
            console.log('http rejected');
            return res.badRequest();
        }

        Comment.findOne({ id:req.param('id') })
            .then((comment) => {
                if (comment.user === req.session.me) {
                    Comment.destroy({ id:req.param('id') })
                        .then((delCommentArr) => {
                            Post.publishRemove(delCommentArr[0].post, 'comments', delCommentArr[0].id, req);
                            res.ok({ 
                                post: delCommentArr[0].post,
                                comment: delCommentArr[0].id,
                                message: `comment deleted`});
                        })
                        .catch((err) => {
                            console.log(err);
                            res.negotiate(err);
                        });
                        
                } else {
                    console.log(`${req.session.me} attempted to delete Comment ${req.param('id')} that isn't theirs`)
                    res.forbidden({ message: `failed to delete Comment`});
                }
            })
            .catch((err) => {
                console.log(err);
                res.negotiate(err);
            });
    }
};

