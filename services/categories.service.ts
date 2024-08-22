import categoryModel from '../models/categories.model'
import { CategoriesInterface } from "../interfaces/categories.interface"


class ProductCategoriesService {

    public async createCategory(productData: CategoriesInterface) {
        try {
            const newProduct = await categoryModel.create(productData)
            return newProduct
        } catch (error) {
            console.log("Product Not Create")
        }
    }

    public async getCategory(productId: any) {
        return await categoryModel.findOne({ productId })
    }

    public async getAllCategory() {
        return await categoryModel.find({ parentId: null });
    }


    public async updateCategory(productId: any, productData: any) {
        return await categoryModel.findByIdAndUpdate(productId, productData)
    }

    public async deleteCategory(productId: any) {
        return await categoryModel.findByIdAndDelete(productId)
    }
}
export default new ProductCategoriesService();