import { Router } from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    checkBodyProduct,
} from '../classes/containerProds.js';

const router = Router();

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', checkBodyProduct, createProduct);

router.put('/:id', checkBodyProduct, updateProduct);

router.delete('/:id', deleteProduct);

export default router;