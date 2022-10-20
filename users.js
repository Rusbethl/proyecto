'use strict'

const { use } = require('../app');
var User = require('../modelos/users');


async function saveUsers(req, res){
    var user = new User();
    var params = req.body;

    if(params.nombre){
        user.nombre = params.nombre;
        user.apellidos = params.apellidos;
        user.telefono = params.telefono;
        user.sexo = params.sexo;
        user.direccion = params.direccion;
        user.rol = params.rol;
        user.sucursal = params.sucursal;
        
        await user.save((err, userStored) =>{
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor'
                })
            } else{ 
                if(userStored){
                    res.status(200).send({
                        user: userStored
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
    User.find({}).exec((err, users) => {
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
    User.findById(userid).exec((err,user) =>{
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



function updateUser(req,res){
    var userid = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userid, update, {new:true}, (err, userUpdated)=>{
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


function deleteUser(req,res){
    var userid=req.params.id;
    User.findByIdAndRemove(userid, (err,userRomoved)=>{
        if(err){
            res.status(500).send({
                menssage: 'Error en el  servidor'
            })
        }else{
            if(userRomoved){
                res.status(200).send({
                    user: userRomoved
                });
            }else{
                res.status(404).send({
                    menssage: 'No existe el usuario'
                });
            }
        }
    })
}


module.exports ={
    saveUsers,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
