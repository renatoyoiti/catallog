const User = require('../models/UserSchema');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json({
      users,
    });
  },
  async destroy(req, res) {
    const { _id } = req.params;

    const { deletedCount } = await User.deleteOne({ _id }, err => {
      if (err) {
        return res.json({
          status: 204,
          message: 'User not found.',
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
      message: 'User deleted.',
    });
  },
  async show(req, res) {
    const { _id } = req.params;

    const user = await User.findOne({ _id }, err => {
      if (err) {
        return res.json({
          status: 204,
          message: 'User not found.',
        });
      }
      return this;
    });

    return res.json(user);
  },
  async store(req, res) {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.json({
        status: 201,
        message: 'E-mail already registered. Please insert another one.',
      });
    }
    user = await User.create({
      name,
      email,
      password_hash: password,
    });

    return res.json({
      user,
    });
  },
  async update(req, res) {
    const { name, email, password } = req.body;
    const { _id } = req.params;

    const user = await User.findOneAndUpdate(
      { _id },
      {
        name,
        email,
        password,
      },
      { new: true },
      err => {
        if (err) {
          return res.json({
            status: 204,
            message: 'User not found',
          });
        }
        return this;
      }
    );

    return res.json({
      message: 'User updated.',
      status: 201,
      user,
    });
  },
};
