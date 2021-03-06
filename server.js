const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
var dotenv = require('dotenv');
dotenv.config();

const bollywoodRoute = require('./routes/bollywoodRoute.js');
const newreleasesRoute = require('./routes/newreleaseRoute');
const hollywoodRoute = require('./routes/hollywoodRoute');
const webseriesRoute = require('./routes/webseriesRoute')
const sliderRoute = require('./routes/sliderRoute')

 
//Create DB Connection

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err.message);
}) 


app.use(express.json());
app.use(cors())

app.use('/api/bollywoods/', bollywoodRoute); 
app.use('/api/newreleases',newreleasesRoute)
app.use('/api/hollywoods',hollywoodRoute)
app.use('/api/webseries',webseriesRoute)
app.use('/api/sliders',sliderRoute)


 

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});