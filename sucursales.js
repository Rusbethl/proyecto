'use strict'

const { use } = require('../app');
var Sucursal = require('../modelos/sucursales');


async function saveUsers(req, res){
    var sucursal = new Sucursal();
    var params = req.body;

    if(params.status){
        sucursal.status = params.status;
        sucursal.nombre = params.nombre;
        sucursal.telefono = params.telefono;
        sucursal.direccion = params.direccion;
        //await sucursal.create(params);
        await sucursal.save((err, SucursalStored) =>{
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor'
                })
            } else{ 
                if(SucursalStored){
                    res.status(200).send({
                        sucursal: SucursalStored
                    });
                }else{
                    res.status(200).send({
                        menssage: 'No se ha guardado'
                    })
                }
            }
        })

    } else{

        res.status(200).send({
            menssage: 'El nombre del user es obligatorio'
        })
    }
}

function getUsers(req, res){
    Sucursal.find({}).exec((err, users) => {
        if(err){
            res.status(500).send({
                menssage: 'Error en el  servidor'
            })
        }else{
            if(users){
                res.status(200).send({
                    users
                });
            }else{
                res.status(404).send({
                    menssage: 'No hay usuarios'
                });
            }
        }
    });
}



module.exports ={
    saveUsers,
    getUsers
};
