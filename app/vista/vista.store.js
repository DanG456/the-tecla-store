//! Métodos GET
module.exports = async (app) => {

    //? Pantalla principal
    app.get('/', (req, res) => {
      res.render('index')
    });

    app.get('/category/accesories', (req, res) => {
      res.render('accesories')
    });

    app.get('/category/chargers', (req, res) => {
      res.render('chargers')
    });

    app.get('/category/esencials', (req, res) => {
      res.render('esencials')
    });

    app.get('/category/devices', (req, res) => {
      res.render('products')
    });

    app.get('/searchProduct', (req, res) => {
      res.render('search')
    })

    app.get('/login', (req, res) => {
      res.render('login_demo')
    });

    app.get('/pago', (req, res) => {
      res.render('Pago_Arts')
    });

    app.get('/purchase', (req, res) => {
      res.render('PurchaseGreeting')
    });

    app.get('/signup', (req, res) => {
      res.render('Registro')
    });

    app.get('/sorry', (req, res) => {
      res.render('sorry_demo')
    });
    
}