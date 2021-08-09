//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./connection')

//Modulo Productos
const products = sequelize.define('productos', {
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
    stockCantidad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})



module.exports= products
