const mongoose = require("mongoose")

const newreleaseSchema = new mongoose.Schema(
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

const newreleaseModel = mongoose.model('newreleases', newreleaseSchema);
module.exports = newreleaseModel;