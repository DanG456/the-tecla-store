//?Import the necessary modules
//*Express
const express = require('express');
const app = express();
const sequelize = require('./db/connection')
//*Dotenv
require('dotenv').config();
//*CORS
const cors = require('cors');
//*Middlewares
const midd = require('./midd/midd');
//Modelos DB
const UsersDB = require('./db/db.modelos.usuarios')
const ProductsDB = require('./db/db.modelos.productos')
//*Routes
const Vistaproductos = require('./app/vista/vista.productos');
const Vistausuarios = require('./app/vista/vista.usuarios');
//? Global Middlewares 
//*JSON
app.use(express.json());
//*CORS
app.use(cors());
//*Rate Limit
app.use(midd.theLimit);

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views', __dirname + '/views')

//iniciamos el servidor
async function serverStart(){
    try{
        await UsersDB.sync({alter: true});
        await ProductsDB.sync({alter: true});
        await sequelize.authenticate();
        console.log("Conexión con la base de datos establecida correctamente");
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`)
        })
    }catch(error){
        console.error('No se pudo conectar correctamente con la base de datos');
    }
}

serverStart();
//? Implement our routes
Vistaproductos(app)
Vistausuarios(app)
