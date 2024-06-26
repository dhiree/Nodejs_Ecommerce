import { model, Schema, Document, Model } from 'mongoose'
import { producttInterface } from '../interfaces/ Product.interface'


const productSchema: Schema<producttInterface & Document> = new Schema({
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
    }

}, { timestamps: true })

const productModel = model<producttInterface & Document>('Product', productSchema)

export default productModel