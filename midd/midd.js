//?Importamos los módulos necesarios
//*Express Rate Limit
const rateLimit = require('express-rate-limit');
const userController=require('../app/controlador/controlador.usuarios')

//?Middlewares
//*Limitar el uso de la API
module.exports.theLimit = rateLimit({
    windowMs: 30 * 60 * 1000, //* 30 minutos de uso
    max: 100, //* 10 peticiones por ventana
    message: "Usted ha excedido los límites de acceso a la API"
});

module.exports.validUser = async (req,res,next)=>{
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            let verificado = await userController.verifyUser(token)
            console.log(verificado)
            req.params.usuario = verificado.data
            return next()
        }else{
            throw new Error ('Este es un sistema seguro y requiere autorización')
        }
    }catch (err){
        console.log(err.message)
        res.status(500).json({error: err.message})
    }
}

