module.exports = function Filter(sails) {
    return {
        user: function (model) {
            //create copy of passed object and return filtered copy to be mre functional
            if (model.password) {
                delete model.password;
                delete model.email;
                delete model.createdAt;
                delete model.updatedAt;
            } else if (model.user) {
                delete model.user.posts;
                delete model.user.password;
                delete model.user.email;
                delete model.user.createdAt;
                delete model.user.updatedAt;
            }
        }
    }
}