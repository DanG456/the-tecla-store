//? Import the necessary modules
const fetch = require('node-fetch');

//? Necessary objects
let Product = {};

//? ML Class
class ML {
    //* Constructos
    constructor(data){
        this.data=data
    };

    //* Save Products data
    saveProducts = async() => {
        for(let index = 0; index < 20 ; index ++){
            Product[index] = {"title" : this.data.results[index].title,
                "thumnail" : this.data.results[index].thumbnail,
                "price" : this.data.results[index].price,
                "index" : index}   
        }
    };

    //* AsyncAwait API ML
    static getProduct = async(url) => {
        let mlProduct;

        const resp = await fetch(url)
        const data = await resp.json()
        mlProduct = new ML (data)
        await mlProduct.saveProducts();
        return data
    };
    
    static getProductList = async (list) =>{
        let result;
        result = await this.getProduct(list)
    };
}

//? Exports modules
module.exports = {ML, Product}