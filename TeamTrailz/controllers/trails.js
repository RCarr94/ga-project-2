const Trail = require("../models/trail");

function index(req, res) {
  Trail.find({}, function (err, trails) {
    res.render("trails/index", { title: "All Trails", trails });
  });
}

module.exports = {
  index,
};
