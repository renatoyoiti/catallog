const app = require('./app');
const { connectDb } = require('./config/database');

connectDb();
app.listen(process.env.PORT || 3333);
