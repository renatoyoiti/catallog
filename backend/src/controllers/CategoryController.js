const Category = require('../models/CategorySchema');

module.exports = {
  async index(req, res) {
    const categories = await Category.find();

    return res.json({
      categories,
    });
  },
  async delete(req, res) {
    const { _id } = req.params;

    const { deletedCount } = await Category.deleteOne({ _id }, err => {
      if (err) {
        return res.json({
          status: 204,
          message: 'Category not found.',
        });
      }
      return this;
    });

    if (deletedCount === 0) {
      return res.json({
        status: 500,
        message: 'It was not possible to delete the user',
      });
    }

    return res.json({
      status: 200,
      message: 'Category deleted.',
    });
  },
  async store(req, res) {
    const { name } = req.body;

    let category = await Category.findOne({
      name,
    });

    if (category) {
      return res.json({
        status: 201,
        message: 'Category already exists.',
      });
    }

    category = await Category.create({
      name,
    });

    return res.json({
      category,
    });
  },
  async update(req, res) {
    const { name } = req.body;
    const { _id } = req.params;

    const category = await Category.findOneAndUpdate(
      { _id },
      { name },
      { new: true },
      err => {
        if (err) {
          return res.json({
            status: 204,
            message: 'Category not found',
          });
        }
        return this;
      }
    );

    return res.json({
      category,
      message: 'Category updated.',
    });
  },
};
