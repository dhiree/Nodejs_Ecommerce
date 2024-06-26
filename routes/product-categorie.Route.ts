import { Router } from "express";

import productController from "../controllers/categories.controller"

const router = Router()

router.post('/', productController.createProduct)
router.get('/:id', productController.getProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)


export default router