import { model, Schema, Document } from 'mongoose'
import { productCategoriesInterface } from "../interfaces/Product.categories.interface"

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
const productCategoriesModel = model<productCategoriesInterface & Document>('ProductCategories', productCategoriesSchema);

export default productCategoriesModel;
