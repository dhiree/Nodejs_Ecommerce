import categoryModel from '../models/categories.model'
import { CategoriesInterface } from "../interfaces/categories.interface"


class SubCategoriesScrvice {

    public async createSubCategories(subCategories: CategoriesInterface) {
        try {
            const create = await categoryModel.create(subCategories)
            return create
        } catch (error) {
            console.log('Error')
        }
    }

    public async getSubCategories(subId: any) {
        return await categoryModel.findOne({ subId })
    }

    public async getAllSubCategories() {
        return await categoryModel.find({ parentId: { $ne: null } }).populate('parentId');
    }

    public async updateSubCatigories(subId: any, subData: any) {
        return await categoryModel.findByIdAndUpdate(subId, subData)
    }

    public async deleteSubCategories(subId: any) {
        return await categoryModel.findByIdAndDelete(subId)
    }
}

export default new SubCategoriesScrvice()