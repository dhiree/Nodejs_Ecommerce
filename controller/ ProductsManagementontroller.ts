import { Request, Response, NextFunction } from "express"
import Validate from '../validation/jio-validation';
import ProductsManagementService from "../services/ ProductsManagementService";

class ProductManagement {

    public async createProductManagement(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = req.body
            const { error } = await Validate.createProductManagement(data);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const create = await ProductsManagementService.createProductManagement(data)
            if (!create) {
                console.log('Product Not Create')
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
            const { productManagementId } = req.params
            const getProduct = await ProductsManagementService.getProductManagementById(productManagementId)
            if (!getProduct) {
                console.log('Product Not Found')
            }
            res.status(200).json({
                data: getProduct
            })
        } catch (error) {
            console.log('Not Found')
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
            const updateProduct = await ProductsManagementService.updateProductManagementById(productId, productData)
            if (!updateProduct) {
                console.log('Product Not Update')
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
            const daleteProduct = await ProductsManagementService.deleteProductById(productId)
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
export default new ProductManagement();

