import { Router } from 'express'
import OrderController from '../controllers/order.controller'

const router = Router()

router.post('/', OrderController.placeOrder);
router.put('/:orderId/cancel', OrderController.cancelOrder);
router.put('/:orderId/complete', OrderController.completeOrder);


export default router