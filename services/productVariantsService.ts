import productVariantsModel from "../model/productVariants";
import { productVariantsInterface } from "../interfaces/peoductVariants";


class ProductVariantsService {
    public async createProductVariant(productVariantData: productVariantsInterface) {
        try {
            const productVariant = await productVariantsModel.create(productVariantData)
            return productVariant
        } catch (error) {
            console.log('ProductVariant Not Create', error)
        }
    }
    public async getProductVariants(variantId: any) {
        return await productVariantsModel.findOne({ _id: variantId })
    }
    public async updateProductVariants(productVariantId: any, productData: any) {
        return await productVariantsModel.findOneAndUpdate(productVariantId, productData)
    }
    public async deleteProductVariants(productVariantId: any) {
        return await productVariantsModel.findByIdAndDelete(productVariantId)
    }
}

export default new ProductVariantsService();