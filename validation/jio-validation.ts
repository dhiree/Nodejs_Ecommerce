import Joi from 'joi'
import mongoose from 'mongoose';
import userModel from '../model/usermodel';

const { ObjectId } = mongoose.Types;

/**
 * validating options for Joi
 */
const options = {
    abortEarly: false,
};

const method = (value: any, helpers: Joi.CustomHelpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
    }
    return value;
};

const checkIfEmailExists = async (value: string, helpers: Joi.CustomHelpers) => {
    const user = await userModel.findOne({ email: value });
    if (user) {
        return helpers.error('any.exists', { message: 'Email already exists' });
    }
    return value;
};

const createUserSchema = Joi.object()
    .keys({
        firstName: Joi.string()
            .empty()
            .required()
            .min(3)
            .max(150)
            .messages({
                'string.base': `firstName must be a type of string`,
                'string.empty': `firstName is required`,
                'any.required': `firstName is required`,
                'any.exists': `firstName already exists`,
            }),
        email: Joi.string()
            .email()
            .external(checkIfEmailExists)
            .required()
            .messages({
                'string.base': `Email must be a type of string`,
                'any.required': `Email is required`,
                'string.empty': `Email is required`,
                'any.exists': `Email already exists`,
            }),
        lastName: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `lastName must be a type of string`,
                'any.required': `lastName is required`,
                'string.empty': `lasttName is required`,
                'any.exists': `lastName already exists`,
            }),
        password: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `password must be a type of string`,
                'string.empty': `password is required`,
                'any.required': `password is required`,
                'any.exists': `password already exists`,
            }),
        mobileNumber: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `MobileNumber must be a type of string`,
                'string.empty': `MobileNumber is required`,
                'string.email': `MobileNumber must be a valid email`,
                'any.required': `MobileNumber is required`,
                'any.exists': `MobileNumber already exists`,
            }),
        role: Joi.string()
            .valid('Admin', 'Customer')
            .optional()
            .messages({
                'string.base': `role must be a type of string`,
                'string.empty': `role is required`,
                'string.email': `role must be a valid email`,
                'any.required': `role is required`,
                'any.exists': `role already exists`,
            })
    });

const productCategoriesSchema = Joi.object()
    .keys({
        name: Joi.string()
            .required()
            .messages({
                'string.base': `Name must be a type of string`,
                'string.empty': `Name is required`,
                'any.optional': `Name is optional`,
                'any.exists': `Name already exists`,
            }),
        description: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `description must be a type of string`,
                'any.required': `description is required`,
                'string.empty': `description is required`,
                'any.exists': `description already exists`,
            }),
    })

const productVariantSchema = Joi.object()
    .keys({
        name: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `Name must be a type of string`,
                'string.empty': `Name is required`,
                'any.optional': `Name is optional`,
                'any.exists': `Name already exists`,
            }),
        description: Joi.string()
            .required()
            .messages({
                'string.base': `description must be a type of string`,
                'any.required': `description is required`,
                'string.empty': `description is required`,
                'any.exists': `description already exists`,
            }),
    })

const createtProductManagementSchema = Joi.object()
    .keys({
        name: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `Name must be a type of string`,
                'string.empty': `Name is required`,
                'any.optional': `Name is optional`,
                'any.exists': `Name already exists`,
            }),
        description: Joi.string()
            .required()
            .messages({
                'string.base': `description must be a type of string`,
                'any.required': `description is required`,
                'string.empty': `description is required`,
                'any.exists': `description already exists`,
            }),
        price: Joi.number()
            .required()
            .messages({
                'string.base': `Price must be a type of number`,
                'any.required': `Price is required`,
                'string.empty': `Price is required`,
                'any.exists': `price already exists`,
            }),
        image: Joi.string()
            .required()
            .messages({
                'string.base': `image must be a type of string`,
                'any.required': `image is required`,
                'string.empty': `image is required`,
                'any.exists': `image already exists`,
            }),
    })


const createUser = async (data: any) => {
    return createUserSchema.validateAsync(data, options);
};
const createProduct = async (data: any) => {
    return productCategoriesSchema.validateAsync(data, options)
}
const createProductVariant = async (data: any) => {
    return productVariantSchema.validateAsync(data, options);
}
const createProductManagement = async (data: any) => {
    return createtProductManagementSchema.validateAsync(data, options);
}
export default {
    createUser,
    createProduct,
    createProductVariant,
    createProductManagement
};
