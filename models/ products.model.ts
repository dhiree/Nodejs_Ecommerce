import mongoose, { model, Schema, Document, Model } from 'mongoose'
import { productInterface } from '../interfaces/product.interface'


const ProductSchema: Schema<productInterface & Document> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories'
    },
    subcategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories'
    }

}, { timestamps: true })

const productModel = model<productInterface & Document>('Product', ProductSchema)
export default productModel
