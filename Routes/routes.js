//Importar modulos necesarios
const db=require('../db/db');
const chkAcc = require("../Middleware/midd")
const Carrito = require ("../assets/dist/js/Carrito")
const cors = require ('cors')
//Exportar las rutas para trabajar el server

module.exports = (app) =>{
    //Iniciamos los endpoint

    app.get('/index',(req,res) => {
        //Respuesta de inicio correcto
        db.Respuesta={
            codigo: 200,
            error: false,
            mensaje: "Bienvenido a The Tecla Store"
        }
        res.send(db.Respuesta)
    })

    app.get('/login_demo',(req,res) => {
        db.Respuesta={
            codigo:200,
            error: false,
            mensaje: "Página para log in del usuario"
        }
        res.send(db.Respuesta)
    })

    app.get('/Registro',(req,res) => {
        db.Respuesta={
            codigo:200,
            error: false,
            mensaje: "Usuario cree una cuenta para empezar su experiencia con nosotros"
        }
        res.send(db.Respuesta)
    })

    //Devuelve los datos de los productos en la BD
    app.get('/products',(req,res)=>{
        res.send(db.Productos)
    })

    //Informa que se añadio un producto al carrito
    app.post('/Pago_Arts',chkAcc.checkAccount, (req,res)=>{
        Carrito.agregarCarrito(req.body.nombre, req.body.precio, req.body.id)

        Carrito.Respuesta = {
            codigo: 200,
            error: false,
            mensaje: "Producto agregado al carrito"
        };

        res.send(Carrito.Respuesta)
    })

    //Eliminar articulos del carrito
    app.delete('/Pago_Arts/:nombre',chkAcc.checkAccount, (req,res)=>{
        if(Carrito.eliminarCarrito(req.params.nombre)){
            Carrito.Respuesta={
                codigo:200,
                error:false,
                mensaje: "Articulo eliminado del carrito"
            }
        }else{
            Carrito.Respuesta={
                codigo:502,
                error: true,
                mensaje: "Hubo un problema al eliminar el articulo de su carrito"
            }
        }
        res.send(Carrito.Respuesta)
    })
}
