import { model, Schema, Document } from 'mongoose'
import { productCategoriesInterface } from "../interfaces/ProductCategories"

const productCategoriesSchema: Schema<productCategoriesInterface & Document> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, { timestamps: true })
const productModel = model<productCategoriesInterface & Document>('ProductCategories', productCategoriesSchema);

export default productModel;
