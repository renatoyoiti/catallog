const multer = require('multer');
const { Router } = require('express');
const multerConfig = require('../config/multer');

const ProductController = require('../controllers/ProductController');

const routes = Router();

routes.get('/products/:_id', ProductController.show);
routes.get('/products', ProductController.index);
routes.delete('/products/:_id', ProductController.destroy);
routes.post(
  '/products',
  multer(multerConfig).single('file'),
  ProductController.store
);
routes.put('/products/:_id', ProductController.update);

module.exports = routes;
