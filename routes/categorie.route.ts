import { Router } from "express";

import categoryController from '../controllers/categories.controller'

const router = Router()

router.post('/', categoryController.createCategory)
router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getCategory)
router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)


export default router