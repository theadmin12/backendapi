const mongoose = require("mongoose")

const bollywoodSchema = new mongoose.Schema(
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

const bollywoodModel = mongoose.model('bollywoods', bollywoodSchema);
module.exports = bollywoodModel;