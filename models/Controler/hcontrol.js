const hollywoodModel = require("../hollywoodModel");
const mongoose = require('mongoose');

module.exports = {
    findProductById: async (req, res) => {
        const id = req.params._id;
        try {
          const product = await hollywoodModel.findById(id);
          // const product = await Product.findOne({ _id: id });
          res.send(product);
        } catch (error) {
                console.log(error);;
        }
      },  
}  