//?Import the necessary modules
//*Express
const express = require('express');
const app = express();
//*Dotenv
require('dotenv').config();
//*CORS
const cors = require('cors');
//*Middlewares
const midd = require('./midd/midd');
//*Routes
const productsRoutes = require('./routes/products.routes');

//? Global Middlewares 
//*JSON
app.use(express.json());
//*CORS
app.use(cors());
//*Rate Limit
app.use(midd.theLimit);

//? Implement our routes
productsRoutes(app)
