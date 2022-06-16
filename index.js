import 'dotenv/config';
import server from './config/server.js';
import { initMongoDB } from './config/mongo.js';
import 'firebase-admin';
import admin from "firebase-admin"
import serviceAccount from "./db/ecommerce-10e65-firebase-adminsdk-a4avb-9feb90d884.json" assert {type: "json"};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const query = db.collection("carritos");
console.log("Conectado a firebase correctamente")
 CreateCart();
getCarrito ()
deleteById("2")
updateById("4")

async function updateById(id) {
    try {
      const res = await query.doc(id).update({cartId: "1234"})
      return res
    } catch (error) {
      throw new Error(error)
    }
  }

  async function deleteById(id) {
    try{
       const deleteById = await query
        .doc(id)
        .delete()
        console.log("Document deleted")
        return deleteById
    } catch{
        console.error("Error deleting document");
    }
  }

async function getCarrito (){

    try{
        const getCarrito = await query.get()
        getCarrito.forEach(doc => console.log(doc.data()))
    } catch (error) {
        console.log(error);
    }
}

console.log('obtener carritos');

async function CreateCart() {

    try {
        let id = 4;
        let doc = await query.doc(id.toString())
        await doc.create({
            "cartId": 4,
        "products": [
            {
                "title": "Ice Cream",
                "description": "home made ice cream",
                "code": "asdf1234",
                "price": 345.67,
                "stock": 10,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/food-and-drink-color/64/ice_cream_food_dessert_restaurant_tasty_sweet_cone-128.png",
                "timestamp": "",
                "id": 3
            }
        ],
        "timestamp": "25/05/2022, 19:37:11"
        })

        console.log("Carrito creado")
    } catch (error) {
        console.log(error);
    }
}

async function addProductsToCart(){
    try{

    }catch (error) {
        console.log(error);
    }
}



const init = async () => {
    await initMongoDB();
    const puerto = process.env.PORT || 8080;

    server.listen(puerto, () => console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${puerto}`));
};

init();