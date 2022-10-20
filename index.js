'use strict'

//cargar modulo de mongoose
var mongoose = require('mongoose');
require("dotenv").config();

var app =require("./app");
var port = 3800;

//conexion a mongodb
mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost:27017/Practica01',{connectTimeoutMS: 1000})
    .then(() =>{
        console.log('La conexion a Mongo fue exitosa');

        app.listen(port, () =>{
            console.log('El servidor esta corriendo en el port: 3800');
        });
    })
    .catch(err => console.log(err));
*/

// npm install dotenv

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Conexion con mongo atlas"))
.catch((error) => console.log(error));

app.listen(port, () => console.log ('server listening on port', port));


