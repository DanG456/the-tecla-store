const userServices=require('./services/user.services')

module.exports=(app)=>{
	//Metodo POST para ingresar usuarios
	app.post('/usuarios',async (req,res)=>{
		try{
			let newUser = req.body
      		let resultado = await userServices.createUser(newUser)
      		res.status(200).json({ message: "Usuario creado exitosamente", resultado})
		}catch(err){
			console.log(err.message)
			res.status(500).json({message:"Ocurrio un error durante la operación", error: err.message})
		}
	})

	//Metodo get para mostrar usuarios en la BD
	app.get('/usuarios', async (req, res) => {
    try {
      let resultado = await userServices.showUsers()
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })
}
