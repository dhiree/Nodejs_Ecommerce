import productManagementModel from "../model/ ProductsManagement";
import { productManagementInterface } from '../interfaces/ ProductsManagementInterface'
class ProductManagementService {

    public async createProductManagement(productData: productManagementInterface) {
        try {
            const createProduct = await productManagementModel.create(productData)
            if (!createProduct) {
                console.log('Product Not Create')
            }
            return createProduct
        } catch (error) {
            console.log('Product Not Create', error)
        }
    }

    public async getProductManagementById(productManagementId: any) {
        try {
            const getProduct = await productManagementModel.findOne({ _id: productManagementId })
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
            const updataData = await productManagementModel.findByIdAndUpdate(productId, productData)
            return updataData
        } catch (error) {
            console.log('Product Management Not Update')
        }
    }
    public async deleteProductById(productId: any) {
        try {
            const deleteData = await productManagementModel.findByIdAndDelete(productId)
            return deleteData
        } catch (error) {
            console.log('Product Managemant Not Delete')
        }
    }

}

export default new ProductManagementService();

// createProductManagement
// getProductManagementById
//updateProductManagementById