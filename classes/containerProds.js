import { products } from "./containerMongoDb"
const { promises: fs } = require('fs')
const moment = require("moment");
const { mongo } = require("../config/mongo")


class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    async updateById(productId, object) {
        try {
            const data = await this.getProds();
            const productIndex = data.findIndex(e => e.id === parseInt(productId));

            if (productIndex >= 0) {
                const updatedObject = await {
                    ...object,
                    timestamp: moment().format("L LTS"),
                    id: productId
                };
                data[productIndex] = updatedObject;
                await fs.writeFile(this.archivo, JSON.stringify(data, null, 2));
                return updatedObject;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log('ERROR ->', err);
        }
    }


    //ver
    async saveProds() {

        let products = new Model();

        try {
            let objs = await products.save()
            return objs
        }
        catch (error) {
            console.log('ERROR => ', error);
        }
    };

    async deleteById(idProducto) {
        try {
            await products.findByIdAndDelete(idProducto)

            return (`Se borro correctamente el producto con el id: ${idProducto}`);
        } catch (error) {
            return error
        }

    }

    async getProdById(idProducto) {
        try {
            const productos = await this.getProds()
            const idGet = await productos.findById(idProducto)
            return idGet
        } catch (error) {
            return error
        }
    }

    async getProds() {
        try {
            const objs = await products.find({});
            return JSON.parse(objs);
        } catch (error) {
            return error;
        }
    }
};


const prod = new Contenedor("./db/products.json")
module.exports = prod;
