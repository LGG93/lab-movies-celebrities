//  Add your code here
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema(
    {
      name: String,
      occupation: String,
      catchPhrase: String
    },
    {
      timestamps: true,
    }
  );
  const celebrityModel = model("celebrity", celebritySchema);
  module.exports = celebrityModel