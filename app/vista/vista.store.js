//! Métodos GET
module.exports = async (app) => {

    //? Pantalla principal
    app.get('/', (req, res) => {
      res.render('index')
    })
}