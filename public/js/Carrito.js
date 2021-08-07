class Carrito{
    constructor(data) {
        this.key = key;
        this.products = this.getProds;
        this.endpoint = 'carrito';
        this.total = 0;
    }

    //Métodos
    agregarCarrito(prod){
        this.products.push(prod)
        localStorage.setItem(this.key,JSON.stringify(this.products));
        let cont = document.getElementById("cont");
        cont.textContent = this.getCount();
    }
    async showProds(){
        for(const i in this.products){
            try{
                if(this.products[i].startsWith("M")){
                    const response = await fetch(`http:127.0.0.1:5500/${this.endpoint}?q=${this.products[i]}`);
                    const item = await response.json();
                    this.total += item.price;
                    this.createElementProduct(item);
                }
            }catch(error){
                throw new Error (error);
            }
        }

        let total = document.getElementById("total");
        total.textContent = Intl.NumberFormat('en-En', {style: "currency", currency: "MXN",}).format(this.total);
    }

    createElementProduct(item){
        let listsProducts = document.getElementById("listProducts")
        let li = document.getElementById("li")
        li.classList.add("list-group-item")
        li.classList.add("d-flex")
        li.classList.add("justify-content-between")
        li.classList.add("lh-sm");
        li.setAttribute('id',item.id);
        
        let div = document.getElementById("div")
        let h6 = document.getElementById("h6")
        h6.classList.add("my-0")
        h6.textContent = item.title;

        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-danger");
        button.classList.add("m-5");
        button.textContent = 'Borrar';
        button.setAttribute('onClick',`eliminateProduct('${item.id}')`);

        let itemImage = document.getElementById("img");
    }
    /*eliminarCarrito(){}
    procedePago(){}
    cancelaPago(){}*/
    
}
