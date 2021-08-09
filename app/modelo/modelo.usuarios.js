//Importamos los modulos a utilizar
const { Model } = require('sequelize')
const sequelize = require('sequelize')
const Usuarios = require('../../db/db.modelos.usuarios')

//Exportamos los modulos a utilizar
module.exports.delUsersChk = async (name) =>{
    let user=[name.nombre, name.apellidos]
    try{
        let userconfirmation = await Usuarios.findOne({where:{nombre: `${user[0]}`}})
        if(userconfirmation != null){
            let check= await Usuarios.findOne({where:{apellidos: `${user[1]}`}})
            if(check != null){
                await Usuarios.destroy({where:{nombre: `${user[0]}`,apellidos: `${user[1]}`}})
            }else{
                return false;
            }
        }else{
            return false;
        }
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

module.exports.Usernew = async (usr)=> {
    console.log(usr)
    try {
        let resultado = await Usuarios.findOne({where:{apellidos: usr[1]}})
        console.log(resultado)
        if (resultado != null){
            return false
        }else {
            await Usuarios.create({nombres:usr[0], apellidos:usr[1],email:usr[2],usuario:usr[3],pass:usr[4]})
            return true
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }

}

module.exports.Userexists = async (usr) =>{
    let user = [usr.mail , usr.pass]
    try {
        let resultado = await Usuarios.findOne({where: {name: `${user[0]}`}})
        console.log(resultado)
        if (resultado != null) {
            let check = await Usuarios.findOne({where: {pass: `${user[1]}`}})
            if (check != null) {
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.Update = async (newUsr,currUsr) => {
    try{
        let updateUsr = await Usuarios.update({nombre: [newUsr]},{where: {nombreprod: [currUsr]}})
        return updateUsr
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}
