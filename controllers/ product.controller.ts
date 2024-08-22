import { Request, Response, NextFunction } from "express"
import Validate from '../validation/joi-validation';
import productService from '../services/ product.service'

class ProductController {

    public async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            console.log("Data", data);
            console.log("Type of Data:", typeof data)
            const { error } = await Validate.createProduct(data);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const create = await productService.createProduct(data)
            if (!create) {
                throw new Error('Product Not Created')
            }
            res.status(200).json({
                message: 'Product Created',
                create
            })
        } catch (error) {
            console.log('Product Not Create')
            console.log("Error", error);
            next(error)
        }
    }

    public async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const { productId } = req.params
            const getProduct = await productService.getProductById(productId)
            if (!getProduct) {
                throw new Error('Invaled Id ')
            }
            res.status(200).json({
                data: getProduct
            })
        } catch (error) {
            console.log('Not Found..')
            next(error)
        }
    }

    public async getAllProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let { page = 1, limit = 10 } = req.query;

            const getProduct = await productService.getAllProduct(page, limit)
            if (!getProduct) {
                throw new Error('Produce Not Found ')
            }
            res.status(200).json({
                data: getProduct
            })
        } catch (error) {
            console.log('Not Found..')
            next(error)
        }
    }

    public async updateProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params;
            const productData = req.body
            const { error } = await Validate.createProduct({ productId, productData });
            if (error) {
                throw new Error(error.details[0].message);
            }
            const updateProduct = await productService.updateProductById(productId, productData)
            if (!updateProduct) {
                throw new Error('Product Not Update')
            }
            res.status(200).json({
                updateProduct,
                Message: 'Product Updata'
            })
        } catch (error) {
            console.log("Not Update")
            next(error)
        }
    }

    public async deleteProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params;
            const daleteProduct = await productService.deleteProductById(productId)

            res.status(200).json({
                daleteProduct,
                Message: 'Product Delete'
            })
        } catch (error) {
            console.log('error')
            next(error)
        }
    }
}

export default new ProductController();

