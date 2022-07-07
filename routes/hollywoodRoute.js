const express = require("express");
const hollywoodModel = require("../models/hollywoodModel");
const hcontrol = require('../models/Controler/hcontrol')

const router = express.Router();

router.get('/hmovies', async (req, res) => {

    try{

        const hollywoods = await hollywoodModel.find({});
        res.send(hollywoods);

    } catch(err) {

        return res.status(400).json({message : err});

    }
})

router.get('/:_id', hcontrol.findProductById)

module.exports = router; 