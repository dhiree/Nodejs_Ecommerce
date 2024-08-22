import Joi from 'joi'
import mongoose from 'mongoose';
import userModel from '../models/user.model';

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

const categorySchema = Joi.object()
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

const createVariantSchema = Joi.object()
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
            .required()
            .messages({
                'string.base': `description must be a type of string`,
                'any.required': `description is required`,
                'string.empty': `description is required`,
                'any.exists': `description already exists`,
            }),
        // parentId: Joi.string()
        //     .required()
        //     .messages({
        //         'string.base': `parentId must be a type of String`,
        //         'any.required': `parentId is required`,
        //         'string.empty': `parentId is required`,
        //         'any.exists': `parentId already exists`,
        //     }),
    })



const createtProductSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': `Name must be a type of string`,
        'string.empty': `Name is required`,
        'any.required': `Name is required`,
    }),
    description: Joi.string().required().messages({
        'string.base': `description must be a type of string`,
        'any.required': `description is required`,
        'string.empty': `description is required`,
    }),
    price: Joi.number().required().messages({
        'number.base': `Price must be a type of number`,
        'any.required': `Price is required`,
        'number.empty': `Price is required`,
    }),
    image: Joi.string().required().messages({
        'string.base': `image must be a type of string`,
        'any.required': `image is required`,
        'string.empty': `image is required`,
    }),
    categoryId: Joi.string().allow('').optional().messages({
        'string.base': `categoryId must be a type of string`,
    }),
    subcategoryId: Joi.string().allow('').optional().messages({
        'string.base': `subcategoryId must be a type of string`,
    })
});
const SubcategorySchema = Joi.object()
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
        parentId: Joi.string()
            .required()
            .messages({
                'string.base': `parentId must be a type of string`,
                'any.required': `parentId is required`,
                'string.empty': `parentId is required`,
                'any.exists': `parentId already exists`,
            }),
    })

const createUser = async (data: any) => {
    return createUserSchema.validateAsync(data, options);
};
const createCategory = async (data: any) => {
    return categorySchema.validateAsync(data, options)
}
const createVariant = async (data: any) => {
    return createVariantSchema.validateAsync(data, options);
}
const createProduct = async (data: any) => {
    return createtProductSchema.validateAsync(data, options);
}
const createSubCategorie = async (data: any) => {
    return SubcategorySchema.validateAsync(data, options)
}
export default {
    createUser,
    createCategory,
    createVariant,
    createProduct,
    createSubCategorie
};
