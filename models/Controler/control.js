const bollywoodModel = require("../bollywoodModel");
const mongoose = require('mongoose');

module.exports = {
    findProductById: async (req, res) => {
        const id = req.params._id;
        try {
          const product = await bollywoodModel.findById(id);
          // const product = await Product.findOne({ _id: id });
          res.send(product);
        } catch (error) {
                console.log(error);;
        }
      },  
}  