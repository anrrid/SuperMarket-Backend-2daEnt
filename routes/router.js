import { Router } from 'express';
import productsRouter from './productsRoute.js';
import cartsRouter from './cartRouteFB.js'

const router = Router();

router.use('/products', productsRouter);
router.use('/carts', cartsRouter);


export default router;