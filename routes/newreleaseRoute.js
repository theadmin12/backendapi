const express = require("express");
const newreleaseModel = require("../models/newreleaseModel");
const newcontrol = require('../models/Controler/newcontrol')

const router = express.Router();

router.get('/newmovies', async (req, res) => {

    try{

        const newreleases = await newreleaseModel.find({});
        res.send(newreleases);

    } catch(err) { 

        return res.status(400).json({message : err});

    }
})

router.get('/:_id', newcontrol.findProductById)

module.exports = router;