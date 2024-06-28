import { Router } from "express";
import ProductManagement from '../controller/ ProductsManagementontroller'

const router = Router()

router.post('/', ProductManagement.createProductManagement)
router.get('/:productManagementId', ProductManagement.getProductManagementById)
router.put('/:productId', ProductManagement.updateProductManagementById)
router.delete('/:productId', ProductManagement.deleteProductById)


export default router