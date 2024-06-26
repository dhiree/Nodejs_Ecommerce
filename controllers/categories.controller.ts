import { Request, Response, NextFunction } from "express"
import productService from "../services/product-categories.service"
import Validate from '../validation/joi-validation';


class ProductCategoriesController {

    public async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productData = req.body;
            const { error } = await Validate.createProduct(productData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const newProduct = await productService.createProduct(productData)
            res.status(200).json(newProduct)
        } catch (error) {
            console.log("error")
            next(error)
        }
    }

    public async getProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productId } = req.params;
            const product = await productService.getProduct(productId);
            if (!product) {
                throw new Error('User not found....!');
            }
            res.status(201).json({
                data: product,
                message: "Success"
            });
        } catch (error) {
            next(error);
        }
    }

    public async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updateProduct = await productService.updateProduct(productId, productData)
            if (!updateProduct) {
                throw new Error('Product Not Updated')
            }
            res.status(201).json({
                data: updateProduct,
                message: "Product  Categories Updated"
            })
        } catch (error) {
            console.log("Product Categories Not Updated")
            next(error)
        }
    }

    public async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = req.params.id
            const deleteProduct = await productService.deleteProduct(productId)
            res.status(201).json({
                deleteProduct,
                message: "Product Was Delete"
            })
        } catch (error) {
            console.log("Product Was Deleted")
            next(error)
        }
    }
}
export default new ProductCategoriesController();


// completed