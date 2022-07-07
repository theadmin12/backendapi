const mongoose = require('mongoose');
const newreleaseModel = require('../newreleaseModel')

module.exports = { 

      findProductById: async (req, res) => {
        const id = req.params._id;
        try {
          const product = await newreleaseModel.findById(id);
          // const product = await Product.findOne({ _id: id });
          res.send(product);
        } catch (error) {
                console.log(error);;
        }
      },  
}  