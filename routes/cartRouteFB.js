import { Router } from 'express';
import {CreateCart,
    getCarrito,
    deleteById,
    updateById} from '../index.js'

const router = Router();

router.get('/', getCarrito);

router.get('/:id', getProductById);

router.post('/', CreateCart);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

export default router;