'use strict'

const { use } = require('../app');
var Metodo_pago = require('../modelos/metodo_pago');


async function saveUsers(req, res){
    var metodo_pago = new Metodo_pago();
    var params = req.body;

    if(params.nombre){
        metodo_pago.nombre = params.nombre;
        metodo_pago.codigo = params.codigo;
        
        await metodo_pago.save((err, DirStored) =>{
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor'
                })
            } else{ 
                if(DirStored){
                    res.status(200).send({
                        metodo_pago: DirStored
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
    Metodo_pago.find({}).exec((err, users) => {
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

function updateUser(req,res){
    var userid = req.params.id;
    var update = req.body;

    Metodo_pago.findByIdAndUpdate(userid, update, {new:true}, (err, userUpdated)=>{
        if(err){
            res.status(500).send({
                menssage: 'Error en el  servidor'
            })
        }else{
            if(userUpdated){
                res.status(200).send({
                    user: userUpdated
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
    updateUser,

};
