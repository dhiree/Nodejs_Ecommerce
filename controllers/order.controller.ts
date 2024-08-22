import { Request, Response, NextFunction } from "express";
import OrderService from "../services/order.service";

class OrderController {
    public async placeOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { customerId, products } = req.body;
            const order = await OrderService.placeOrder(customerId, products);
            res.status(201).json({
                message: 'Order placed successfully',
                order
            });
        } catch (error) {
            console.error('Error placing order', error);
            next(error);
        }
    }

    public async cancelOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { orderId } = req.params;
            const cancellationResult = await OrderService.cancelOrder(orderId);
            res.status(200).json({
                message: 'Order cancelled successfully',
                cancellationResult
            });
        } catch (error) {
            console.error('Error cancelling order', error);
            next(error);
        }
    }

    public async completeOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { orderId } = req.params;
            const completionResult = await OrderService.completeOrder(orderId);
            res.status(200).json({
                message: 'Order completed successfully',
                completionResult
            });
        } catch (error) {
            console.error('Error completing order', error);
            next(error);
        }
    }
}

export default new OrderController();
