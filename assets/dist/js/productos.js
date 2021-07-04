class Productos {
    constructor(data) {
        this.data = data
    };

    //Metodos
    crearProductos = () => {
        for (let index = 0; index < 9; index++){
            //Contenedor principal donde se alojan las tarjetas
            let cardContainer = document.getElementById("cardContainer");

            //div col
            let col = document.createElement("div");

            //div card
            let card = document.createElement("div");
            card.setAttribute("class", "card shadow-sm");

            //div imagen
            let imagen = document.createElement("img");
            imagen.setAttribute("src", this.data.results[index].thumbnail);
            imagen.setAttribute("class", "bd-placeholder-img card-img-top")
            imagen.style.width = "200px";

            //div cardBody
            let cardBody = document.createElement("div");

            //Nombre del producto
            let nombreProducto = document.createElement("h5");
            nombreProducto.setAttribute("class", "card-text");
            nombreProducto.textContent = `${this.data.results[index].title}`;

            //Pie de tarjeta
            let cardFooter = document.createElement("div");
            cardFooter.setAttribute("class", "d-flex justify-content-between align-items-center");

            //Precio del producto
            let precioProducto = document.createElement("small");
            precioProducto.textContent = `$${this.data.results[index].price}`;

            cardContainer.appendChild(col);
            col.appendChild(card);
            card.appendChild(imagen);
            card.appendChild(cardBody);
            cardBody.appendChild(nombreProducto);
            cardBody.appendChild(cardFooter);
            cardFooter.appendChild(precioProducto);
        }
    }

    //AsyncAwait API ML
    static getProduct = async(url) => {
        let Product;

        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
        Product = new Productos (data)
        Product.crearProductos()
        return data
    };
    
    static getProductList = async (list) =>{
        let resultado;
        resultado = await this.getProduct(list)
        console.log(resultado);
    }
}

Productos.getProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM1055&sort=available_quantity_desc");