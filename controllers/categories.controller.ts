import { Request, Response, NextFunction } from "express"
import categoryService from '../services/categories.service'
import Validate from '../validation/joi-validation';


class CategoriesController {

    public async createCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const productData = req.body;
            const { error } = await Validate.createCategory(productData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const newProduct = await categoryService.createCategory(productData)
            res.status(200).json(newProduct)
        } catch (error) {
            console.log("Categories Not Create", error)
            next(error)
        }
    }

    public async getAllCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await categoryService.getAllCategory();
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

    public async getCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const { productId } = req.params;
            const product = await categoryService.getCategory(productId);
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

    public async updateCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updateProduct = await categoryService.updateCategory(productId, productData)
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

    public async deleteCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = req.params.id
            const deleteProduct = await categoryService.deleteCategory(productId)
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
export default new CategoriesController();


// completed