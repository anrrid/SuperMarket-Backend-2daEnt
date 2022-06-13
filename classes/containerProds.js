import { products } from "./containerMongoDb"
const { promises: fs } = require('fs')
const moment = require("moment");
const { mongo } = require("../config/mongo")


class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    async updateById() {
        try {
            return await this.findByIdAndUpdate(id,
                {
                    $set: products,
                },
                { new: true }
            );
        } catch (err) {
            res.status(500).json({
                error: err.message,
                stack: err.stack,
            });
        }
    };


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
            const objs = await products.find({});
            const idGet = await objs.findById(idProducto)
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
