const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/ecommerce'

//CONNECTION
mongoose.connect(DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateInex: true },
    (err) => {
        if (err) {
            console.log('ERROR DE CONEXION');
        } else {
            console.log('CONEXION EXITOSA');
        }
    })

module.exports = mongoose;