const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
var compression = require('compression')

app.use(compression({
    level:6,
    threshold:100*1000,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false;
        }
        return compression.filter(req,res)
    }
}));

const bollywoodRoute = require('./routes/bollywoodRoute.js');
const newreleasesRoute = require('./routes/newreleaseRoute');
const hollywoodRoute = require('./routes/hollywoodRoute');
const webseriesRoute = require('./routes/webseriesRoute')

 
//Create DB Connection
const MONGODB_URI = "mongodb+srv://admin:adminmovie@cluster0.bt2gtmm.mongodb.net/movie?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI).then(() => {
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

 
 
app.get("/", (req, res) => {
    res.send("Server in running!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});  