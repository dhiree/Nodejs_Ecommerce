import mongoose, { model, Schema, Document } from 'mongoose'
import { productVariantsInterface } from "../interfaces/peoduct-variant.interface"



const productVariantSchema: Schema<productVariantsInterface & Document> = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    colour: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
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

const productVariantsModel = model<productVariantsInterface & Document>('ProductVariants', productVariantSchema);
export default productVariantsModel;
