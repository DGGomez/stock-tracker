require('dotenv').config();

const express = require('express');
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/basic');
const data = require('./models/dataModel');
const user = require('./models/userModel');
const nodemailer = require('nodemailer');
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

var auth = {
    type: 'oauth2',
    user: 'WillMurrayApps@gmail.com',
    clientId: process.env.ID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRESH,
};

app.post('/send', function(req, res){
 var response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  
  
  var mailOptions = {
      from: req.body.name,
      to: 'WillMurrayApps@gmail.com',
      subject: 'My site contact from: ' + req.body.name,
      text: req.body.message,
      html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
  };
var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
  });
});

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 10,
      currency: "cad",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

//connection.end();
module.exports = app;
