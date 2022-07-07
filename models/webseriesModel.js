const mongoose = require("mongoose")

const webseriesSchema = new mongoose.Schema(
    {
        name: { type: String, require },
        image: { type: String, require },
        year: { type: Number, require },
        generation: { type: String, require },
        category: { type: String, require },
        rate: { type: Number, require },
        season: { type: Number, require },
    },
    {
        timestamps: true, //add date
    }
);

const webseriesModel = mongoose.model('webseries', webseriesSchema);
module.exports = webseriesModel;