const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
      title: String,
      genre: String,
      plot: String,
      cast: []
    },
    {
      timestamps: true,
    }
  );
  const movieModel = model("movie", movieSchema);
  module.exports = movieModel