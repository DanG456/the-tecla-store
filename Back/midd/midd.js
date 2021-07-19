//?Importamos los módulos necesarios
//*Express Rate Limit
const rateLimit = require('express-rate-limit');

//?Middlewares
//*Limitar el uso de la API
const theLimit = rateLimit({
    windowMs: 30 * 60 * 1000, //* 30 minutos de uso
    max: 100, //* 10 peticiones por ventana
    message: "Usted ha excedido los límites de acceso a la API"
});

//?Exportamos las funciones
module.exports = {theLimit}