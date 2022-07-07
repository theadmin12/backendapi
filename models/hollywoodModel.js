const mongoose = require("mongoose")

const hollywoodSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    image: { type: String, require },
    year: { type: Number, require },
    generation: { type: String, require },
    category: { type: String, require },
    rate: { type: Number, require },
  },
  {
    timestamps: true, //add date
  }
);

const hollywoodModel = mongoose.model('hollywoods', hollywoodSchema);
module.exports = hollywoodModel;