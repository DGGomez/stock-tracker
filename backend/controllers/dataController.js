'use strict';
var mongoose = require('mongoose');
var order = mongoose.model('Data');
var User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const moment = require('moment');

exports.create = async function(req, res) {
  try{
  var new_order = new order (
    req.body
  );
  mongoose.connection.db.collection("Orders", function(err,collection){
    if (err)
        res.send(err);
    collection.insertOne(new_order,function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  });
  }
  catch(err){
    console.log(err);
    res.status(400).send({ message: error });
  }
};

exports.read = async function(req, res) {
  try{
  var status = 0;
  mongoose.connection.db.collection("Orders", function(err,orders){
    if (err){
      res.send(err);
    }
    orders.find({location: req.body.location}).toArray(function(err, data) {
      if (err){
        res.send(err);
      }

        res.json(data);
      
  });
});
  }
  catch(err){
    console.log(err);
    res.status(400).send({ message: error });

  }
}
exports.archive = async function(req, res) {
  try{
  var location = req.body.location;
  mongoose.connection.db.collection("Archive", function(err,archives){
    if (err){
      res.send(err);
    }
    archives.find({location: location}).toArray(function(err, data) {
      if (err){
        res.send(err);
      }
      res.json(data);
    });
    })
  }
  catch(err){
    console.log(err);
    res.status(400).send({ message: error });

  }
}

exports.registerUser = async function(req,res){
  try {
    console.log('registerUser: ', req.body);
    const { email, password, name, username } = req.body;
    let user = await User.createUser({ email, password, name, username });
    let token = await jwt.sign({ user }, process.env.SECRET_KEY);
    res.status(200).send({ user, token });
} catch (error) {
    console.log('registerUser error: ', error);
    res.status(400).send({ message: error });
}
}

exports.loginUser = async function(req,res){
  try {
    console.log('loginUser: ', req.body);
    const { email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if(existingUser === null) {
        return res.status(400).send({ message: 'User does not exists' });
    }

    let isMatch =  await User.comparePassword(password, existingUser.password);
    
    if(isMatch) {
        let token = await jwt.sign({ user: existingUser }, process.env.SECRET_KEY);
        res.status(200).send({ user: existingUser, token });
    } else {
        res.status(400).send({ message: 'Incorrect email/password' });
    }
    
} catch (error) {
    console.log('loginUser error: ', error);
    res.status(400).send({ message: error });
}
}

exports.getUser = async function(req,res){
  try {
    console.log('getUser: ', req.user);
    let { user } = req;

    let updatedUser = await User.findOne({ _id: user._id });

    let token = await jwt.sign({ user: updatedUser }, process.env.SECRET_KEY);
    
    res.status(200).send({ user: updatedUser, token });
} catch (error) {
    console.log('getUser error: ', error);
    res.status(400).send({ message: error });
}
}