const { Router } = require('express');

const routes = Router();

routes.get('/users', (req, res) => {
  res.send('Hello Routes!');
});

module.exports = routes;
