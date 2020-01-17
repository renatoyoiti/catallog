const { Router } = require('express');

const routes = Router();

routes.get('/catallogs', (req, res) => {
  res.send('Hello Catallogs');
});

module.exports = routes;
