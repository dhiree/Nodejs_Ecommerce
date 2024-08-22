import { Request, Response, NextFunction } from "express"
import Validate from '../validation/joi-validation';
import subCategoriesService from '../services/sub-categories.service'


class SubCategoriesController {

    public async createSubCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const subData = req.body
            const { error } = await Validate.createSubCategorie(subData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const createSub = await subCategoriesService.createSubCategories(subData)
            res.status(201).json({
                data: createSub,
                Message: 'Sub Categories Created'
            })
        } catch (error) {
            console.log('Sub Categories Not Create')
            next(error)
        }
    }
    public async getSubCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { subId } = req.params
            const getCategories = await subCategoriesService.getSubCategories(subId)
            if (!getCategories) {
                throw new Error('Sub Categories Not Create');
            }
            res.status(200).json({
                data: getCategories
            })
        } catch (error) {
            console.log('Sub Categories Not Get')
            next(error)
        }
    }

    public async getAllSubCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getCategories = await subCategoriesService.getAllSubCategories()
            if (!getCategories) {
                throw new Error('Sub Categories Not Create');
            }
            res.status(200).json({
                data: getCategories
            })
        } catch (error) {
            console.log('Sub Categories Not Get')
            next(error)
        }
    }
    public async updateSubCategories(req: Request, res: Response, next: NextFunction): Promise<void> {

        try {
            const subId = req.params.id;
            const subData = req.body;
            const updateProduct = await subCategoriesService.updateSubCatigories(subId, subData)
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

    public async daleteSubCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const subId = req.params.id
            const deleteProduct = await subCategoriesService.deleteSubCategories(subId)
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

export default new SubCategoriesController();