const express = require("express");
const sliderModel = require("../models/sliderModel");
const slidercontrol = require('../models/Controler/slidercontrol')

const router = express.Router();

router.get('/slidermovies', async (req, res) => {

    try{

        const sliders = await sliderModel.find({});
        res.send(sliders);

    } catch(err) { 
 
        return res.status(400).json({message : err});

    }
})

router.get('/:_id', slidercontrol.findProductById)

module.exports = router;