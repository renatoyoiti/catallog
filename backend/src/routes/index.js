const categoryRoutes = require('./categories.routes');
const fileRoutes = require('./files.routes');
const productRoutes = require('./products.routes');
const userRoutes = require('./users.routes');

module.exports = [userRoutes, categoryRoutes, fileRoutes, productRoutes];
