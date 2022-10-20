'use strict'

var express = require('express');
var UsersController = require('../controladores/users');

var api = express.Router();


api.post('/user', UsersController.saveUsers);
api.get('/users',UsersController.getUsers);
api.get('/user/:id', UsersController.getUser);
api.put('/user/:id', UsersController.updateUser);
api.delete('/user/:id',UsersController.deleteUser);
module.exports = api;