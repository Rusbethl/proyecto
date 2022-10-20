'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app=express();

var user_router = require('./rutas/users');
var roles_router = require('./rutas/roles');
var sucursales_router = require('./rutas/sucursales');
var meto_pago_router = require('./rutas/metodo_pago');
var ventas_router = require('./rutas/ventas');
var productos_router = require('./rutas/productos');


//body-parser
app.use(bodyParser.urlencoded({extended:false})); //convierte a JSON lo que viene en POST, GET etc
app.use(bodyParser.json());

app.use('/api', user_router);
app.use('/api', roles_router);
app.use('/api', sucursales_router);
app.use('/api', meto_pago_router);
app.use('/api',ventas_router);
app.use('/api', productos_router);



module.exports = app;//para crear el  servidor