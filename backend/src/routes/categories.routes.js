const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const routes = Router();

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:_id', CategoryController.update);

module.exports = routes;
