//cartFireBase
import { Router } from 'express';
import {CreateCart,
    getCarrito,
    deleteById,
    updateById} from '../classes/containerFirebase.js'

const router = Router();

router.get('/', getCarrito);

router.post('/', CreateCart);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

export default router;