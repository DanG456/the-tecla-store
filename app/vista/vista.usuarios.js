//Importamos los modulos necesarios
const controllerUsers = require('../controlador/controlador.usuarios')
const dbProducts = require('../../db/theProducts');
const midd = require('../../midd/midd');

//Exportamos los modulos a ser utilizados

//Metodos GET
module.exports = async (app) => {
    //? Raise our server
    app.listen(process.env.PORT, () => {
        console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
     });
    
    app.get('/usuarios', async(req,res)=>{
        try {
            let resultado = await controllerUsers.showUsers()
            res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
        } catch (err) {
            console.log(err.message)
            res.status(500).json({ message: "Error en el servidor", error: err.message})
        }
    })
}
//Metodos POST
module.exports = async (app) =>{
    app.post('/inicioSesion',async(req,res)=>{
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
                return resultado
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
    app.patch('/usuario/:nombre',async(req,res)=> {
        let newName = req.body
        let currName = req.params.nombre
        try{
            let usr = controllerProducts.updateUser(newName,currName)
            return usr
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la actualización del usuario')
        }
    })

    app.patch('/categorias/:categoria',async(req,res)=> {
        let newCategory = req.body
        let currCategory = req.params.categoria

        try{
            let cat = controllerProducts.updateCategory(newCategory,currCategory)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrrio un error en la actualización de la categoría')
        }
    })
}

//Metodos DELETE
module.exports=async(app)=>{
    app.delete('/eliminar/:usuario',midd.validUser(),async(req,res)=>{
        let usr=[req.params.nombre, req.params.apellidos]
        if(controllerUsers.deleteUser(usr)){
            res.status(200).json('El usuario se elimino correctamente')
        }else{
            res.status(500).json('Ocurrio un error al eliminar el usuario')
        }
    })
}
