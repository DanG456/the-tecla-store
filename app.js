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
const midd = require('./Back/midd/midd');
//*Routes
const productsRoutes = require('./Back/routes/products.routes');
const usersRoutes=require('./Back/routes/users.routes');
//? Global Middlewares 
//*JSON
app.use(express.json());
//*CORS
app.use(cors());
//*Rate Limit
app.use(midd.theLimit);

//iniciamos el servidor
async function serverStart(){
    try{
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
productsRoutes(app)
usersRoutes(app)
