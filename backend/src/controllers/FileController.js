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
  async store(reqFile, productId) {
    const { originalname: name, key, location: url = '', size } = reqFile;

    const file = await File.create({
      name,
      key,
      url,
      size,
      product_id: productId,
    });

    if (file) {
      return file;
    }

    return null;
  },
};
