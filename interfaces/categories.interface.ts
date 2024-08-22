import { ObjectId } from "mongoose";

export interface CategoriesInterface {
    name: string,
    description: string,
    parentId: ObjectId
}