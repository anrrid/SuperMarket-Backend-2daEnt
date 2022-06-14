import mongoose from "mongoose";

const prodsCollection = "products";

//SCHEMA
const prodsSchema = new mongoose.Schema(
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
export const ProductsModel = mongoose.model(prodsCollection, prodsSchema);
