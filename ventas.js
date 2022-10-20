'use strict'

const { use } = require('../app');
var Venta = require('../modelos/ventas');


async function saveUsers(req, res){
    var venta = new Venta();
    var params = req.body;

    if(params.sucursal){
        venta.sucursal = params.sucursal;
        venta.productos = params.productos;
        venta.total = params.total;
        venta.user = params.user;
        venta.metodo_pago= params.metodo_pago;
        await venta.save((err, userStored) =>{
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor'
                })
            } else{ 
                if(userStored){
                    res.status(200).send({
                        venta: userStored
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
    Venta.find({}).exec((err, users) => {
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

function getUser(req, res){
    var userid = req.params.id;
    Venta.findById(userid).exec((err,user) =>{
        if(err){
            res.status(500).send({
                menssage: 'Error en el  servidor'
            })
        }else{
            if(user){
                res.status(200).send({
                    user
                });
            }else{
                res.status(404).send({
                    menssage: 'No existe el usuario'
                });
            }
        }
    });
}




module.exports ={
    saveUsers,
    getUsers,
    getUser,
};
