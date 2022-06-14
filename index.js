import 'dotenv/config';
import server from './config/server.js';
import { initMongoDB } from './config/mongo.js';



const init = async () => {
    await initMongoDB();
    const puerto = process.env.PORT || 8080;

    server.listen(puerto, () => console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${puerto}`));
};

init();