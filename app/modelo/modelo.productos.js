//Importamos modulos
const {sequelize} = require('sequelize')
const Productos = require('../../db/db.modelos.productos')


//Exportamos los modulos a utilizar

module.exports.getProductsByCategory = async(category)=>{
    let allProducts = await Productos.findAll({
        where:{
            categoria: {
                [sequelize.eq]: [category]
            }
        }
    })
    return allProducts[0][category]
}

module.exports.lastProduct = async (prod)=> {
    console.log(prod)
    try {
        let resultado = await Products.findOne({where:{nombreprod: prod[0]}})
        console.log(resultado)
        if (resultado != null){
            return false
        }else {
            await Products.create({nombreprod:prod[0], precio:prod[1],categoria:prod[2],stockCantidad:prod[3]})
            return true
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}
