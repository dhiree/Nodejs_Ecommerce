import mongoose, { model, Schema, Document } from 'mongoose'
import { OderInterface } from '../interfaces/order.interface'
import { required } from 'joi'


const CartSchema: Schema<& Document> = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ['placed', 'processing', 'completed', 'cancelled'],
        default: 'placed'
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    variantId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }

}, { timestamps: true })

const cartModel = model<OderInterface & Document>('cart', CartSchema)
export default cartModel
