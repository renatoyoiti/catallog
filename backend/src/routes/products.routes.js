const multer = require('multer');
const { Router } = require('express');
const multerConfig = require('../config/multer');

const ProductController = require('../controllers/ProductController');

const routes = Router();

routes.delete('/products/:_id', ProductController.destroy);
routes.post(
  '/products',
  multer(multerConfig).single('file'),
  ProductController.store
);

module.exports = routes;
