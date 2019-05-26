/**
 * verifyDelete
 *
 * @module      :: Policy
 * @description :: Simple policy to verify post/comment user matches req.session for deletes
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
    module.exports = function(req, res, next) {
    // if deleting post and post user matches req.session or if deleting comment
    // and comment user matches req.session, proceed to the next policy, 
    // or if this is the last policy, the controller
    if (req.route.path === '/api/post/:id?') {
        Post.findOne({ id:req.param('id') })
            .then((post) => {
                // potential policy?
                if (post.user === req.session.me) {
                    sails.log('match');
                    return next();                        
                } else {
                    // User is not allowed
                    // (default res.forbidden() behavior can be overridden in `config/403.js`)
                    return res.forbidden('delete failed: Incorrect user Id');
                }
            })
            .catch((err) => {
                console.error(err);
                return res.negotiate(err);
            });
    } else if (req.route.path === '/api/comment/:id?') {
        Comment.findOne({ id:req.param('id') })
            .then((comment) => {
                if (comment.user === req.session.me) {
                    sails.log('match');
                    return next();                        
                } else {
                    // User is not allowed
                    // (default res.forbidden() behavior can be overridden in `config/403.js`)
                    return res.forbidden('delete failed: Incorrect user Id');
                }
            })
            .catch((err) => {
                sails.log.error(err);
                return res.negotiate(err);
            });
    } else {
        return res.notFound('delete path not recognised: ' + req.route.path);
    }
  };