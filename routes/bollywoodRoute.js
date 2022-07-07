const express = require("express");
const bollywoodModel = require("../models/bollywoodModel");
const control = require('../models/Controler/control')

const router = express.Router();

router.get('/bmovies', async (req, res) => {

    try{

        const bollywoods = await bollywoodModel.find({});
        res.send(bollywoods);

    } catch(err) {

        return res.status(400).json({message : err});

    }
})

router.get('/:_id', control.findProductById)

module.exports = router;