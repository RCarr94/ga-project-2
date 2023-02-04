const Trail = require('../models/trail');
const User = require('../models/user');


function newFavourite(req, res) {

    Trail.find({}, function (err, trails) {
    res.render('favourites/new', { title: 'Add to Favourites', trails });
  });
}

function create(req, res) {
  const fav = new (req.body);
  trail.user = req.user._id;
  trail.save(function (err) {
    if (err) return res.redirect('/trails/new');
    res.redirect(`/trails/${trail._id}`);
  });
}

function create(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    const favourite = {
      ...req.body,
      user: req.user._id,
      userName: req.user.name,
    };

    trail.favourites.push(comment);
    console.log(comment);
    trail.save(function (err) {
      console.log('error', err);
      res.redirect(`/trails/${trail._id}`);
    });
  });
}


module.exports = {
  new: newFavourite,
};

// What Jibran suggested
// 1. in fav new form, get rid of. Button on trails to fav can direct link to favs
// 2.Favs button routes treat as the form
// 3. check restful chart - proper route to pull trails info and add it to favs
// 4. favs controller --> populate favs model with trail data
// 5. favs page acting as index page, copy format to that..

// Bonus
