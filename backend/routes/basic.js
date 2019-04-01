const express = require('express');
var authenticate = require('../middleware/authenticate');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/create')
    .post(dataList.create);

app.route('/read')
    .post(dataList.read);
    
app.route('/archive')
    .post(dataList.archive);

app.post('/register')
    .post(dataList.registerUser);

app.post('/login')
    .post(dataList.loginUser);

app.post('/token-login')
    .post(authenticate, dataList.getUser);

}