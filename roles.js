'use strict'

const { use } = require('../app');
var Rol = require('../modelos/roles');


async function saveUsers(req, res){
    var rol = new Rol();
    var params = req.body;

    if(params.nombre){
        rol.nombre = params.nombre;
        rol.codigo_rol = params.codigo_rol;
        
        await rol.save((err, RolStored) =>{
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor'
                })
            } else{ 
                if(RolStored){
                    res.status(200).send({
                        rol: RolStored
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
    Rol.find({}).exec((err, users) => {
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

function deleteUser(req,res){
    var userid=req.params.id;
    Rol.findByIdAndRemove(userid, (err,userRomoved)=>{
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
    deleteUser
};
