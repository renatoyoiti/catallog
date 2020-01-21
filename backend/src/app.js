require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use(require('./routes'));
// app.get('/', (req, res) => {
//   res.send('Hello Wolrd');
// });

module.exports = app;
