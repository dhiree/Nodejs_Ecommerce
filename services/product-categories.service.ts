import productModel from "../models/Product-categories.model";
import { productCategoriesInterface } from "../interfaces/Product.categories.interface"


class ProductCategoriesService {

    public async createProduct(productData: productCategoriesInterface) {
        try {
            const newProduct = await productModel.create(productData)
            return newProduct
        } catch (error) {
            console.log("Product Not Create")
        }
    }

    public async getProduct(productId: any) {
        return await productModel.findOne({ productId })
    }

    public async updateProduct(productId: any, productData: any) {
        return await productModel.findByIdAndUpdate(productId, productData)
    }

    public async deleteProduct(productId: any) {
        return await productModel.findByIdAndDelete(productId)
    }
}
export default new ProductCategoriesService();