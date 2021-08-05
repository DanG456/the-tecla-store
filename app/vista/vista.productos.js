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
    app.get('/devices', async (req, res)=>{
        try{
            controllerProducts.storeProduct()
            controllerProducts.showProductsByCategory(devices)
            res.status(200).send(dbProducts.Product)
        }catch(error){
            console.log(error)
            res.status(500).jeson('Hubo un error al cargar esta página')
        }
    })

    //? ENDPOINT (/accesories)
    app.get('/accesories', async(req, res) => {
        controllerProducts.storeProduct()
        controllerProducts.showProductsByCategory(accesories)
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/esencials)
    app.get('/esencials', async(req, res) => {
        controllerProducts.storeProduct()
        controllerProducts.showProductsByCategory(esencials)
        res.status(200).send(dbProducts.Product)
    });

    //? ENDPOINT (/chargers)
    app.get('/chargers', async(req, res) => {
        controllerProducts.storeProduct()
        controllerProducts.showProductsByCategory(chargers)
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
    app.post('/devices',async(req,res)=>{
        let insertDevice=req.body
        try{
            insertDevice = controllerProducts.createProduct(product)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/accesories',async(req,res)=>{
        let insertAccesory=req.body
        try{
            insertAccesory = controllerProducts.createProduct(product)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/esencials',async(req,res)=>{
        let insertEsencial = req.body
        try{
            insertEsencial = controllerProducts.createProduct(product)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })

    app.post('/chargers',async(req,res)=>{
        let insertCharger= req.body
        try{
            insertCharger = controllerProducts.createProduct(product)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error en la operacion')
        }
    })


}

//Metodos UPDATE
/*module.exports = async(app)=>{
    
}*/

//Metodos DELETE
/*module.exports = async(app)=>{
    
}*/
