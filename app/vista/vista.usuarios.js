//Importamos los modulos necesarios
const controllerUsers = require('../controlador/controlador.usuarios')
const dbProducts = require('../../db/theProducts');
const midd = require('../../midd/midd');

//Exportamos los modulos a ser utilizados

//Metodos GET

//Metodos POST
module.exports = async (app) =>{
    app.post('/login',async(req,res)=>{
        let user=req.body;
        try{
            let login=await controllerUsers.checkUser(user)
            if(login){
                let validate=await controllerUsers.generateToken()
                res.json(validate)
            }
        }catch(error){
            console.log(error)
            res.status(400).send('No se encuentra a dicho usuario registrado')
        }
    })

    app.post('/nuevoUsuario',async(req,res)=>{
        try{
            let userNew = req.body
            try{

                let resultado = servicesUsuarios.createUsers(userNew)
                res.status(200).json('Usuario creado correctamente')

            }catch(err){
                console.log(err)
                res.status(400).send('Ocurrio un error en la creacion de usuario')  
        }
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la creacion de su cuenta')
        }
    })
}

//Metodos UPDATE
module.exports=async(app)=>{
    app.post('/usuario/:nombre',async(req,res)=> {

    })
}

//Metodos DELETE
module.exports=async(app)=>{
    app.delete('/eliminar/:usuario',midd.validUser(),async(req,res)=>{
        let usr=[req.params.name, req.params.apellidos]
        if(controllerUsers.deleteUser(usr)){
            res.status(200).json('El usuario se elimino correctamente')
        }
    })
}
