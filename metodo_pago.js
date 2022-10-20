'use strict'

var express = require('express');
var Metodo_pagoController = require('../controladores/metodo_pago');

var api = express.Router();


api.post('/metodoP', Metodo_pagoController.saveUsers);
api.put('/metodoP/:id', Metodo_pagoController.updateUser);
api.get('/metodoP',Metodo_pagoController.getUsers);

module.exports = api;