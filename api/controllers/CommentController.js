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
        
        console.log('create comment: ' + req.params.all());
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
	
};

