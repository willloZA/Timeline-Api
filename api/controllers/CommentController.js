/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    createComment: function (req, res) {
        console.log('comment create', req.params.all());

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
                        console.error(err);
                        res.negotiate(err);
                    });
            })
            .catch((err) => {
                console.error(err);
                res.negotiate(err);
            });
    },
    
    deleteComment: function (req, res) {
        Comment.destroy({ id:req.param('id') })
            .then((delCommentArr) => {
                Post.publishRemove(delCommentArr[0].post, 'comments', delCommentArr[0].id, req);
                res.ok({ 
                    post: delCommentArr[0].post,
                    comment: delCommentArr[0].id,
                    message: `comment deleted`});
            })
            .catch((err) => {
                console.error(err);
                res.negotiate(err);
            });
    }
};

