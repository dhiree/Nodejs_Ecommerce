import productModel from "../models/ products.model";
import { producttInterface } from '../interfaces/ Product.interface'
class ProductService {

    public async createProductManagement(productData: producttInterface) {
        try {
            const createProduct = await productModel.create(productData)
            if (!createProduct) {
                console.log('Product Not Create')
            }
            return createProduct
        } catch (error) {
            console.log('Product Not Create', error)
        }
    }

    public async getProductManagementById(managementId: any) {
        try {
            const getProduct = await productModel.findOne({ _id: managementId })
            if (!getProduct) {
                throw new Error('Invalid ProductId')
            }
            return getProduct
        } catch (error) {
            console.log('Product not Get', error)
        }
    }

    public async updateProductManagementById(productId: any, productData: any) {
        try {
            const updataData = await productModel.findByIdAndUpdate(productId, productData)
            return updataData
        } catch (error) {
            console.log('Product Management Not Update')
        }
    }
    public async deleteProductById(productId: any) {
        try {
            const deleteData = await productModel.findByIdAndDelete(productId)
            return deleteData
        } catch (error) {
            console.log('Product Managemant Not Delete')
        }
    }

}

export default new ProductService();
