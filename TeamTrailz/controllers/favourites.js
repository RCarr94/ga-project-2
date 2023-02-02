const Trail = require('../models/trail');
const Favourite = require('../models/favourite');

function create(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    const fav = {
      ...req.body,
      user: req.user._id,
      userName: req.user.name,
    };

    trail.favourites.push(fav);
    console.log(fav);
    favourite.save(function (err) {
      if (err) return res.redirect('/trails');
      res.redirect('/favourites/new');
    });
  });
}

function newFavourite(req, res) {
  Favourite.find({}, function (err, favourites) {
    res.render('favourites/new', {
      title: 'Favourite Trails',
      favourites,
    });
  });
}

module.exports = {
  create,
  new: newFavourite,
};
