//Require the modules that we're going to use
const dbProducts = require('../db/theProducts');
const midd = require('../midd/midd');

//Export our routes for work on the server
module.exports = (app) => {
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
}