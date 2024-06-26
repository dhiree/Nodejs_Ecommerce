import { Request, Response, NextFunction } from "express"
import productVariants from "../services/product.variantss.service"
import Validate from "../validation/joi-validation"


class ProductVariantsController {
    public async createProductVariants(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productVariantData = req.body;
            const { error } = await Validate.createProductVariant(productVariantData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const product = await productVariants.createProductVariant(productVariantData)
            res.status(200).json(product)
        } catch (error) {
            console.log("Product Not Create ")
            next(error)
        }
    }
    public async getProductVariants(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { variantId } = req.params;
            const getProduct = await productVariants.getProductVariants(variantId)
            if (!getProduct) {
                throw new Error('User not found....!');
            }
            res.status(200).json({
                Message: "successful",
                data: getProduct
            })
        } catch (error) {
            console.log("Product Not Get..")
            next(error)
        }
    }
    public async updateProductVariants(req: Request, res: Response, next: NextFunction) {
        try {
            const { productVariantId } = req.params;
            const productData = req.body;
            const updateProductVariant = await productVariants.updateProductVariants(productVariantId, productData)
            if (!updateProductVariant) {
                throw new Error('Product Variant Not Updated')
            }
            res.status(200).json({
                data: updateProductVariant
            })
        } catch (error) {
            console.log("Product Not Update..")
            next(error)
        }
    }
    public async deleteProductVariants(req: Request, res: Response, next: NextFunction) {
        try {
            const { productId } = req.params;
            const deleteVariant = await productVariants.deleteProductVariants(productId)
            res.status(200).json(deleteVariant)
        } catch (error) {
            console.log("Product Variant Not Delete")
            next()
        }
    }

}
export default new ProductVariantsController();



// get is panding