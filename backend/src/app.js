const express = require('express');

const app = express();

app.use(express.json());
app.use(require('./routes'));
// app.get('/', (req, res) => {
//   res.send('Hello Wolrd');
// });

module.exports = app;
