import { Router } from 'express';
import productsRouter from './productsRoute.js';

const router = Router();

router.use('/products', productsRouter);

export default router;