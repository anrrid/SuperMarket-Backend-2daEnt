import mongoose from "mongoose";
const Schema = mongoose.Schema;

//SCHEMA
const prodsSchema = new Schema(
    {
        title: String,
        price: Number,
        thumbnail: String,
        description: String,
        sku: String,
        stock: Number,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);


//MODELS
const products = new mongoose.model('products', prodsSchema)

module.exports = { products }