const Product = require('../models/ProductSchema');
const FileController = require('./FileController');

module.exports = {
  async destroy(req, res) {
    const { _id } = req.params;

    const product = await Product.findOne({ _id }, err => {
      if (err) {
        return res.json({
          status: 204,
          message: 'Product not found.',
        });
      }
      return this;
    });

    if (product) {
      await product.remove();

      return res.json({
        message: 'Product removed',
      });
    }

    return res.json({
      status: 500,
      message:
        'An error ocurred while trying to remove the product. Please, try again later',
    });
  },
  async store(req, res) {
    const { name, category, color, details } = req.body;

    const product = await Product.create({
      name,
      category,
      color,
      details,
    });

    const file = await FileController.store(req.file, product._id);

    if (!file) {
      return res.json({
        message: 'The product photo was not uploaded.',
        product,
      });
    }

    return res.json({
      message: 'Successful',
      product,
      file,
    });
  },
};
