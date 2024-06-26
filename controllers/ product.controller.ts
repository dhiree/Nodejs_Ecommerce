import { Request, Response, NextFunction } from "express"
import Validate from '../validation/joi-validation';
import productService from '../services/ Product.Service'

class ProductController {

    public async createProductManagement(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = req.body
            const { error } = await Validate.createProductManagement(data);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const create = await productService.createProductManagement(data)
            if (!create) {
                throw new Error('Product Not Created')
            }
            res.status(200).json({
                message: 'Product Not Create',
                create
            })
        } catch (error) {
            console.log('Product Not Create')
            next(error)
        }
    }
    public async getProductManagementById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { managementId } = req.params
            const getProduct = await productService.getProductManagementById(managementId)
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
    public async updateProductManagementById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params;
            const productData = req.body
            const { error } = await Validate.createProduct({ productId, productData });
            if (error) {
                throw new Error(error.details[0].message);
            }
            const updateProduct = await productService.updateProductManagementById(productId, productData)
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

