const mongoose = require('mongoose');
const sliderModel = require('../sliderModel')

module.exports = { 

      findProductById: async (req, res) => {
        const id = req.params._id;
        try {
          const product = await sliderModel.findById(id);
          // const product = await Product.findOne({ _id: id });
          res.send(product);
        } catch (error) {
                console.log(error);;
        }
      },  
}  