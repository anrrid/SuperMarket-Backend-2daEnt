const express = require('express');
const app = express();
// const routesCart = require("./routes/routes2")
const routesProd = require("./routes/routes")
const { mongoose } = require("./config/mongo");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

const errObj = { error: 'Producto no encontrado' };
const err401 = { error: 'No estás autorizado para acceder a ésta URL' }

// const admin = true;

// app.use('/api/cart', routesCart)
app.use('/api/products', routesProd);


const init = async () => {
    await mongoose();
    const puerto = process.env.PORT || 8080;

    server.listen(puerto, () => console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${puerto}`));
};

init();