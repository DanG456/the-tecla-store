//Importamos los modulos necesarios
const controllerProducts = require('../controlador/controlador.productos')
const dbProducts = require('../../db/theProducts');
const midd = require('../../midd/midd');

//Exportamos los modulos a ser utilizados

//Metodos GET
module.exports = async (app) =>{
    //? Raise our server
    app.listen(process.env.PORT, () => {
       console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
    });

    //? ENDPOINT Start (/)
    app.get('/', (req, res)=> {
        res.send({
            code: 200,
            error: true,
            message: 'Punto de inicio'
        });
    })

     //? ENDPOINT (/devices)
     app.get('/devices', async(req, res) => {
        await dbProducts.ML.getProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM1055&sort=available_quantity_desc&offset=20&limit=20")
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/accesories)
    app.get('/accesories', async(req, res) => {
        await dbProducts.ML.getProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM3813&sort=available_quantity_desc&offset=20&limit=20")
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/esencials)
    app.get('/esencials', async(req, res) => {
        await dbProducts.ML.getProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM192051&sort=available_quantity_desc&offset=20&limit=20")
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/chargers)
    app.get('/chargers', async(req, res) => {
        await dbProducts.ML.getProductList("https://api.mercadolibre.com/sites/MLM/search?q=cargadores&sort=available_quantity_desc&offset=20&limit=20")
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/search:name)
    app.get('/search/:name', async(req, res) => {
        let busqueda = req.params.name
        await dbProducts.ML.getDBProductList(`https://api.mercadolibre.com/sites/MLM/search?q=${busqueda}&sort=available_quantity_desc&offset=20&limit=20`)
        res.status(200).send(dbProducts.Product)
    });
}

//Metodos POST
module.exports = async(app)=>{
    app.post('/devices',midd.validUser,async(req,res)=>{
        let insertDevice=req.body
        try{
            let insDevice = controllerProducts.createProduct(insertDevice)
            return insDevice
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/accesories',midd.validUser(),async(req,res)=>{
        let insertAccessory=req.body
        try{
            let insAccessory = controllerProducts.createProduct(insertAccessory)
            return insAccessory
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/esencials',midd.validUser(),async(req,res)=>{
        let insertEsencial = req.body
        try{
            let insEsencial = controllerProducts.createProduct(insertEsencial)
            return insEsencial
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/chargers', midd.validUser(),async(req,res)=>{
        let insertCharger= req.body
        try{
            insCharger = controllerProducts.createProduct(insertCharger)
            return insCharger
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })


}

//Metodos UPDATE
module.exports = async(app)=>{
    app.patch('/productos/:nombreprod', midd.validUser(),async (req,res)=>{
        let newprodName=req.body
        let currentprodName=req.params.nombreprod
        try{
            let product = controllerProducts.updateProduct(newprodName,currentprodName)
            return product
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la actualización del producto')
        }
    })    
}

//Metodos DELETE
module.exports = async(app)=>{
    app.delete('/productos/:nombreprod',midd.validUser(),async(req,res)=>{
        let prodName = req.params.nombreprod
        try{
            if(controllerProducts.delProd(prodName)){
                res.status(200).send('El producto fue eliminado correctamente')
            }
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error al eliminar el producto')
        }
    })
}
