'use strict'

var express = require('express');
var SucursalesController = require('../controladores/sucursales');

var api = express.Router();


api.post('/sucursales', SucursalesController.saveUsers);
api.get('/sucursales',SucursalesController.getUsers);

module.exports = api;