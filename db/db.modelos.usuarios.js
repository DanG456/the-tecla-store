//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('connection')

//Defino los modelos de la BD que voy a utilizar
const users=sequelize.define('users', {
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
    }
})
