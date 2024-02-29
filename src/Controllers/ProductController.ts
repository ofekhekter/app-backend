import express, { Request, Response, NextFunction } from 'express';
import { ProductType } from '../Models/ProductModel';
import { productLogic } from '../Logic/productLogicLogic';

const router = express.Router();

router.post('/addProduct', async (req: Request, res: Response, next: NextFunction) => {
    const newProduct = req.body as ProductType;
    const product = await productLogic(newProduct);
    res.json(product);
});

export default router;