let statSession= require("../db/db")

// Exportar los módulos requeridos

//Control de que la sesión este iniciada para agregar productos al carrito
module.exports.checkAccount=(req, res, next)=>{
    if(!req.body.Session){
        statSession.Respuesta = {
            codigo: 502,
            error: true,
            mensaje: "Necesita iniciar sesión para agregar productos al carrito"
        };
        res.send(statSession.Respuesta)
    }else{
        return next()
    }
}
