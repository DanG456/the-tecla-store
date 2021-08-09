//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./connection')

//Modulo Usuarios
const users=sequelize.define('usuarios', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        validate:{
            isEmail: true,
        },
        allowNull: false
    },
    domicilio: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})

module.exports= users
