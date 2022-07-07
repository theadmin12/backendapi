const express = require("express");
const webseriesModel = require("../models/webseriesModel");
const webcontrol = require('../models/Controler/webcontrol')

const router = express.Router();

router.get('/web', async (req, res) => {

    try{

        const webseriess = await webseriesModel.find({});
        res.send(webseriess);

    } catch(err) {

        return res.status(400).json({message : err});

    }
})

router.get('/:_id', webcontrol.findProductById)

module.exports = router;