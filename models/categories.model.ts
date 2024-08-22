import mongoose, { model, Schema, Document } from 'mongoose'
import { CategoriesInterface } from "../interfaces/categories.interface"

const productCategoriesSchema: Schema<CategoriesInterface & Document> = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    parentId: {
        type: mongoose.Schema.ObjectId,
        default: null
    }

}, { timestamps: true })
const CategoriesModel = model<CategoriesInterface & Document>('categories', productCategoriesSchema);

export default CategoriesModel;
