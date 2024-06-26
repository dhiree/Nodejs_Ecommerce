import { Router } from "express";
import productVariants from "../controllers/product-variants.controller"
const router = Router()

router.post('/', productVariants.createProductVariants)
router.get('/:variantId', productVariants.getProductVariants)
router.put('/:productId', productVariants.updateProductVariants)
router.delete('/:productId', productVariants.deleteProductVariants)



export default router
