var db = require("../models");

// Routes =============================================================
module.exports = function(app) {
  app.get("/api/stuff", function(req, res) {
    db.Stuff.findAll({}).then(function(dbStuff) {
      res.redirect("/");
    });
  });

  app.post("/api/stuff", function(req, res) {
    db.Stuff.create({
      itemtype: req.body.itemtype,
      size: req.body.size,
      color: req.body.color,
      location:req.body.location,
      attrib: req.body.attrib
    }).then(function(dbStuff) {
      res.redirect("/");
    });
  });

  app.delete("/api/stuff/:id", function(req, res) {
    db.Stuff.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStuff) {
      res.redirect("/");
    });
  });

};