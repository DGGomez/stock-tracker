require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/basic');
const data = require('./models/dataModel');
const user = require('./models/userModel');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(bodyParser.text());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONFIG);
const db = mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.warn('Warning: ', error));
    
dataRoutes(app);

//connection.end();
module.exports = app;
