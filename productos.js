'use strict'

var express = require('express');
var ProductosController = require('../controladores/productos');

var api = express.Router();


api.post('/producto', ProductosController.saveUsers);
api.get('/productos',ProductosController.getUsers);
api.get('/producto/:id', ProductosController.getUser);
api.put('/useproducto/:id', ProductosController.updateUser);
api.delete('/producto/:id',ProductosController.deleteUser);
module.exports = api;