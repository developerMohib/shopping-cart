import { Request, Response } from 'express';
import Product, { IProduct } from '../model/products.model';

interface CustomError {
    message: string;
    status?: number;
}

const allProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetch all products from the database
        const products: IProduct[] = await Product.find();

        // Check if products are found
        if (!products || products.length === 0) {
            res.status(404).json({ message: 'No products found' });
            return
        }

        // Send products as response
        res.status(200).json(products);
    } catch (error) {
        // Log error and send error response
        const err = error as CustomError;
        console.log(err.message);
        res.status( err.status || 500).json({ message: err.message || 'Server Error' });
    }
};

export default allProducts;
