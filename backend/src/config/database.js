require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  async connectDb() {
    await mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_ACCESS}`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
      }
    );
    mongoose.set('useFindAndModify', false);
  },
};
