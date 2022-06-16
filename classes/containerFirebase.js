import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('../db/ecommerce-10e65-firebase-adminsdk-a4avb-9feb90d884.json'));

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});

console.log("Conectado a firebase correctamente")

CreateCart();


async function CreateCart() {
    const db = admin.firestore();
    const query = db.collection("carts");

    try {
        let id = 1;
        let doc = await query.doc(id.toString())
        await doc.create({"cartId": 1,
        "products": [
            {
                "title": "Coke",
                "description": "soft drink",
                "code": "asdf1234",
                "price": 123.45,
                "stock": 10,
                "thumbnail": "https://cdn2.iconfinder.com/data/icons/food-desserts-drinks-and-sweets/512/soda-256.png",
                "timestamp": "",
                "id": 1
            },
            {
                "title": "Meat",
                "description": "premium quality meat",
                "code": "asdf1234",
                "price": 234.56,
                "stock": 10,
                "thumbnail": "https://cdn0.iconfinder.com/data/icons/food-177/64/steak-beef-meat-food-128.png",
                "timestamp": "",
                "id": 2
            }
        ],
        "timestamp": "25/05/2022, 19:37:11"})

        console.log("carrito creado");
    } catch (error) {
        console.log(error);
    }
}

