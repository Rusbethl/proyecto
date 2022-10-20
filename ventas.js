'use strict'

var express = require('express');
var VentasController = require('../controladores/ventas');

var api = express.Router();


api.post('/ventas', VentasController.saveUsers);
api.get('/ventas',VentasController.getUsers);
api.get('/ventas/:id', VentasController.getUser);

module.exports = api;