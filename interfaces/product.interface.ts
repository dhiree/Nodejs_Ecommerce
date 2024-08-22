import { ObjectId } from 'mongoose';
export interface productInterface {
    name: string,
    description: string,
    price: number,
    image: string,
    categoryId: ObjectId,
    subcategoryId: ObjectId
}