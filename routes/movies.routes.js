const router = require("express").Router();



router.get("/create", (req, res) => res.render("movies/new.movie"));

router.post("/create", (req, res) => {
    const { title,genre, plot, cast } = req.body;

    /*  .then(() => {
        res.redirect("/celebrities")
      })
      .catch((err) => {
        console.error(`Error while creating a new Celebrity: ${err}`)
        res.redirect("/celebrities")
      })*/
  });

  module.exports = router;