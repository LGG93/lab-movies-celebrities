const celebrityModel = require("../models/Celebrity.model");

const router = require("express").Router();
module.exports = router;
//Create a celebrity
router.get("/create", (req, res) => res.render("celebrities/new-celebrity"));

router.post("/create", (req, res) => {
    const { name,occupation, catchPhrase } = req.body;
    celebrityModel.create({ name,occupation, catchPhrase })
      .then(() => {
        res.redirect("/celebrities")
      })
      .catch((err) => {
        console.error(`Error while creating a new Celebrity: ${err}`)
        res.redirect("/celebrities")
      })
  });

//Display the celebrities
router.get('/', (req, res) => {
    celebrityModel.find()
      .then((allCelebrities) =>{
        res.render("celebrities/celebrities", { allCelebrities })
})
      .catch((error) => `Error while finding all Celebrities: ${error}`);
});
