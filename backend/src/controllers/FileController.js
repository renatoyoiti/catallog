const mongoose = require('mongoose');

const File = require('../models/FileSchema');

module.exports = {
  async index(req, res) {
    const file = await File.find();

    return res.json({
      file,
    });
  },
  async destroy(req, res) {
    const { _id } = req.params;

    const file = await File.findById(_id);
    await file.remove();

    return res.json({
      message: 'File deleted',
    });
  },
  async store(req, res) {
    const { originalname: name, key, location: url = '', size } = req.file;

    const file = await File.create({
      name,
      key,
      url,
      size,
    });

    return res.json({
      message: 'ok',
      file,
    });
  },
};
