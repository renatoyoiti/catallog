const { Router } = require('express');
const UserController = require('../controllers/UserController');

const routes = Router();

routes.delete('/users/:_id', UserController.destroy);
routes.get('/users/:_id', UserController.show);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.store);

module.exports = routes;
