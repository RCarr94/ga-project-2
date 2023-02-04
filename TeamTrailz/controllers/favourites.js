const Trail = require('../models/trail');
const Favourite = require('../models/favourite')


function newFavourite(req, res) {

    Trail.find({}, function (err, trails) {
    res.render('favourites/new', { title: 'Add to Favourites', trails });
  });
}

function create(req, res) {
  const favourite = new Favourite(req.body);
  favourite.user = req.user._id;
  favourite.save(function (err) {
    if (err) return res.redirect('/favourites/new');
    console.log(favourite);
    res.redirect(`/trails/`);
  });
}

function index(req, res) {
  Favourite.find({}, function (err, favourite) {
    res.render('favourites/index', { title: 'Favourite Trails', favourite });
  });
}

function deleteFavourite(req, res) {
  Favourite.findByIdAndDelete(req.params.id, function (err, favourite) {
    if (err) return res.redirect('/favourites');
    console.log(favourite);
    res.redirect('/favourites');
  });
}


module.exports = {
  new: newFavourite,
  create,
  index,
  delete: deleteFavourite,
};

// What Jibran suggested
// 1. in fav new form, get rid of. Button on trails to fav can direct link to favs
// 2.Favs button routes treat as the form
// 3. check restful chart - proper route to pull trails info and add it to favs
// 4. favs controller --> populate favs model with trail data
// 5. favs page acting as index page, copy format to that..

// Bonus
