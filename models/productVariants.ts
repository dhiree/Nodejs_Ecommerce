import { model, Schema, Document } from 'mongoose'
import { productVariantsInterface } from "../interfaces/peoductVariants"


const productVariantSchema: Schema<productVariantsInterface & Document> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, { timestamps: true })

const productVariantsModel = model<productVariantsInterface & Document>('ProductVariants', productVariantSchema);
export default productVariantsModel;
