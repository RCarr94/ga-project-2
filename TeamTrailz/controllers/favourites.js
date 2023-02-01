const Trail = require('../models/trail');

//add function


function addTrail(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    if (trail.usersReading.id(req.user._id)) return res.redirect('/trails');
    book.usersReading.push(req.user._id);
    book.save(function (err) {
      res.redirect(`/books/${book._id}`);
    });
  });
}
//remove function