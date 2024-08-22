import { Router } from "express";
import ProductController from '../controllers/ product.controller'

const router = Router()

router.post('/', ProductController.createProduct)
router.get('/:productId', ProductController.getProductById)
router.get('/', ProductController.getAllProduct)
router.put('/:productId', ProductController.updateProductById)
router.delete('/:productId', ProductController.deleteProductById)


export default router