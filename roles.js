'use strict'

var express = require('express');
var RolController = require('../controladores/roles');

var api = express.Router();


api.post('/roles', RolController.saveUsers);
api.get('/roles',RolController.getUsers);
api.delete('/roles/:id',RolController.deleteUser);
module.exports = api;