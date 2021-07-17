let Productos={}
let Respuesta = {
    codigo: 200,
    error: false,
    mensaje: ''
}

class Product{
    constructor(nombre, precio,id) {
        this.nombre=nombre
        this.precio=precio
        this.id=id
    } 
}

const newProduct = agregarCarrito= (nombre, precio, id) => {
    Productos[nombre] = new Product (nombre, precio,id)

}

const delProduct = eliminarCarrito = (nombre) => {
    if(Productos.hasOwnProperty(nombre)){
        delete Productos[nombre]
        return true
    }else{
        return false
    }
}

procedePago = () => {}
cancelaPago = () => {}
