import subCategoriesController from '../controllers/sub-categories.controller'
import { Router } from 'express'


const router = Router()

router.post('/', subCategoriesController.createSubCategories)
router.get('/', subCategoriesController.getAllSubCategories)
router.get('/:subId', subCategoriesController.getSubCategories)
router.put('/subId', subCategoriesController.updateSubCategories)
router.delete('/:subId', subCategoriesController.daleteSubCategories)

export default router
