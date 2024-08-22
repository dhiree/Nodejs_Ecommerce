import { OderInterface } from '../interfaces/order.interface'
import OrderModel from '../models/order.model'
class OrderService {
    public async placeOrder(customerId: string, products: any): Promise<OderInterface> {
        try {
            const order = await OrderModel.create({ customerId });
            return order;
        } catch (error) {
            throw new Error('Failed to place order');
        }
    }

    public async cancelOrder(orderId: string): Promise<boolean> {
        try {
            const cancelledOrder = await OrderModel.findByIdAndUpdate(orderId, { status: 'cancelled' });
            return !!cancelledOrder;
        } catch (error) {
            throw new Error('Failed to cancel order');
        }
    }

    public async completeOrder(orderId: string): Promise<boolean> {
        try {
            const completedOrder = await OrderModel.findByIdAndUpdate(orderId, { status: 'completed' });
            return !!completedOrder;
        } catch (error) {
            throw new Error('Failed to complete order');
        }
    }

}

export default new OrderService();
