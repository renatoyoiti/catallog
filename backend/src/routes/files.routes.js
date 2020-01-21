const { Router } = require('express');
const multer = require('multer');

const FileController = require('../controllers/FileController');
const multerConfig = require('../config/multer');

const routes = Router();

routes.delete('/files/:_id', FileController.destroy);
routes.get('/files', FileController.index);
routes.post(
  '/files',
  multer(multerConfig).single('file'),
  FileController.store
);

module.exports = routes;
