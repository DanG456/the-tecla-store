//Importar modulos necesarios
const chkAcc = require("../Middleware/midd")
const Carrito = require ("../assets/dist/js/Carrito")
//Exportar las rutas para trabajar el server

module.exports = (app) =>{
    //Iniciamos el endpoint
    app.post('/Pago_Arts',chkAcc.checkAccount, (req,res)=>{
        Carrito.agregarCarrito(req.body.nombre, req.body.precio, req.body.id)

        Carrito.Respuesta = {
            codigo: 200,
            error: false,
            mensaje: "Producto agregado al carrito"
        };

        res.send(Carrito.Respuesta)
    })
}
