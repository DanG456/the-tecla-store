//Importamos nuestros modulos
const sequelize=require('../db/connection')


module.exports.createUser=async (user) =>{
	let newUser=[
		user.iduser,
		user.nombre,
		user.apellidos,
		user.contrasenia
	]
	console.log(newUser)
  try {
    let userCreation = await sequelize.query(`INSERT INTO usuarios (iduser, nombre, apellidos, contraseña) VALUES (?, ?, ?, ?)`,
    {replacements: newUser, type: sequelize.QueryTypes.SELECT});
    console.log(userCreation)
    return userCreation
  } catch(error) {
    console.log(error)
    throw new Error('Ocurrio un error en la creación de usuario')
  }
}

module.exports.showUsers=async ()=>{
  	try{
  		let resultado = await sequelize.query('SELECT * FROM usuarios')
    	return resultado
  	}catch(err){
  		console.log(error)
    	throw new Error ('Ocurrio un error en la consulta de usuarios')
  	}
}
