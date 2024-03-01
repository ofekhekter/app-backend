import { ProductType } from "../Models/ProductModel";
import { checkIfTableEmpty, insertProductToDB, resetTableCount } from "../Utils/dal";


export const productLogic = async (product: ProductType): Promise<ProductType> => {
    await checkIfTableEmpty("Products");
    await insertProductToDB(product.ProductName, product.ProductPrice);
    return product;
}