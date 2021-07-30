//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('connection')

//Defino los modelos de DB que voy a utilizar
const productos = sequelize.define('productos', {
    nombreprod:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    precio:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria:{
        type: DataTypes.STRING(50)
    },
})

module.exports= Productos