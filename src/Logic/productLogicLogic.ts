import { ProductType } from "../Models/ProductModel";
import { checkIfTableEmpty, insertProductToDB } from "../Utils/dal";


export const productLogic = async (product: ProductType): Promise<ProductType> => {
    checkIfTableEmpty("Products");
    insertProductToDB(product.ProductName, product.ProductPrice);
    return product;
}