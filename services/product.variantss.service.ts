import productVariantsModel from "../models/product-variants.model";
import { productVariantsInterface } from "../interfaces/peoduct-variant.interface";


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
        try {
            const getVariant = await productVariantsModel.findOne({ _id: variantId })
                .populate(['categoryId', 'subcategoryId', 'productId'])
            if (!getVariant) {
                throw new Error('Get VariantBy Not Found')
            }
            return getVariant
        } catch (error) {
            console.log('Invaled Id ', error)
        }
    }

    public async getAllProductVariants() {
        try {
            const variant = await productVariantsModel.find()
                .populate(['categoryId', 'subcategoryId', 'productId'])
            if (!variant) {
                throw new Error('Variant Not Found')
            }
            return variant
        } catch (error) {
            console.log('Product Not Found')
        }
    }

    public async updateProductVariants(productVariantId: any, productData: any) {
        return await productVariantsModel.findOneAndUpdate(productVariantId, productData)
    }

    public async deleteProductVariants(productVariantId: any) {
        return await productVariantsModel.findByIdAndDelete(productVariantId)
    }
}

export default new ProductVariantsService();
