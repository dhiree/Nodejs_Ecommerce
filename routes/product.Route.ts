import { Router } from "express";
import ProductController from '../controllers/ product.controller'

const router = Router()

router.post('/', ProductController.createProductManagement)
router.get('/:managementId', ProductController.getProductManagementById)
router.put('/:productId', ProductController.updateProductManagementById)
router.delete('/:productId', ProductController.deleteProductById)


export default router