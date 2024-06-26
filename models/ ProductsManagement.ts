import { model, Schema, Document, Model } from 'mongoose'
import { productManagementInterface } from '../interfaces/ ProductsManagementInterface'


const productManagementSchema: Schema<productManagementInterface & Document> = new Schema({
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

const productManagementModel = model<productManagementInterface & Document>('ProductManagement', productManagementSchema)

export default productManagementModel