const Trail = require('../models/trail');

function create(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    const comment = {
      ...req.body,
      user: req.user._id,
      userName: req.user.name,
      userAvatar: req.user.avatar,
    };

    trail.comments.push(comment);
    console.log(comment);
    trail.save(function (err) {
      console.log('error', err);
      res.redirect(`/trails/${trail._id}`);
    });
  });
}

function deleteComment(req, res, next) {
  Trail.findOne({
    'comments._id': req.params.id,
    'comments.user': req.user._id,
  })
    .then(function (trail) {
      if (!trail) return res.redirect(`/trails/${trail._id}`);

      trail.comments.remove(req.params.id);
      trail
        .save()
        .then(function () {
          res.redirect(`/trails/${trail._id}`);
        })
        .catch(function (err) {
          next(err);
        });
    })
    .catch(function (err) {
      next(err);
    });
}

module.exports = {
  create,
  delete: deleteComment,
};
