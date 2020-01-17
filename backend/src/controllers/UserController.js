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

    const { deletedCount } = await User.deleteOne({ _id });

    if (deletedCount === 0) {
      return res.json({
        status: 401,
        message: 'It was not possible to delete the user',
      });
    }

    return res.json({
      message: 'User deleted.',
    });
  },
  async show(req, res) {
    const { _id } = req.params;

    const user = await User.findOne({ _id });

    return res.json(user);
  },
  async store(req, res) {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
        password_hash: password,
      });
    }

    return res.json({
      user,
    });
  },
  async update(req, res) {
    const { name, email, password } = req.body;
    const { _id } = req.params;

    const user = await User.findOne({ _id });
    await user.update(
      {
        name,
        email,
        password,
      },
      {
        new: true,
      }
    );

    return res.json({
      message: 'User updated.',
      user,
    });
  },
};
