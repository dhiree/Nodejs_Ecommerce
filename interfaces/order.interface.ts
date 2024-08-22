export interface OderInterface {
    order: "placement" | "processing" | "completion" | "cancellation";
    productId: object,
    variantId: object,
    customerId: string

}