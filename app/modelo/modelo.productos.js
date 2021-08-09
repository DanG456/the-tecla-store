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

module.exports.getProductsByName = async(name)=>{
    let allProducts = await Productos.findAll({
        where:{
            nombreprod: {
                [sequelize.eq]: [name]
            }
        }
    })
    return allProducts[0][name]
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

module.exports.Update = async (newproduct,currprod) =>{
    try{
        let updateProdName = await Productos.update({nombreprod: [newproduct]},{where: {nombreprod: [currprod]}})
        return updateProdName
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

module.exports.delProdChk = async (prod) => {
    let product = [prod.nombreprod]
    try{
        let prodChk = await Productos.findOne({where: {nombreprod: `${product[0]}`}})
        if(prodChk != null){
            await Productos.destroy({where: {nombreprod: `${product[0]}`}})
        }else{
            return false
        }
    }catch(err){
        console.log(err)
        throw new Error (err)
    }
}

module.exports.UpdateCat = async (newCtg,currCtg) => {
    try{
        let updateCtg = await Productos.update({categoria: [newCtg]},{where: {nombreprod: [currCtg]}})
        return updateCtg
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

