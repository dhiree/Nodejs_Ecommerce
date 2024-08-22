import productModel from "../models/ products.model";
import { productInterface } from '../interfaces/product.interface'
class ProductService {

    public async createProduct(productData: productInterface) {
        try {
            console.log("productData", productData);
            const createProduct = await productModel.create(productData)
            if (!createProduct) {
                console.log("Inside Error");
                console.log('Product Not Create')
            }
            return createProduct
        } catch (error) {
            console.log('Product Not Create', error)
        }
    }

    public async getProductById(productId: any) {
        try {
            const product = await productModel.findById({ _id: productId })
                .populate(['categoryId', 'subcategoryId']);
            if (!product) {
                throw new Error('Product not found');
            }
            if (product.categoryId === null) {
                throw new Error('Category Not Match');
            }
            if (product.subcategoryId === null) {
                throw new Error('Subcatagory Not Match');
            }
            return product;
        } catch (error) {
            console.error('Error');
            throw error;
        }
    }

    public async getAllProduct(page: any, limit: any) {
        try {
            const skip = (page - 1) * limit
            const products = await productModel.find().populate(['categoryId', 'subcategoryId'])
                .skip(skip).limit(limit)
            if (!products) {
                throw new Error('product Not found')
            }
            return products;
        } catch (error) {
            console.error('Error');
            throw error;
        }
    }

    public async updateProductById(productId: any, productData: any) {
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

