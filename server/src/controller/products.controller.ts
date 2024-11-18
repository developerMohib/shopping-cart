import { Request, Response } from 'express';
import Product, { IProduct } from '../model/products.model';
import { CustomErrorHandler } from '../../utils/CustomErrorHandler';

interface CustomError {
    message: string;
    status?: number;
}

const allProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sort, category } = req?.query;
        console.log('13 ', sort, category)
        console.log('14 ', category)


        const filter: any = {};
        let sortCriteria: any = {};

        if (category && category !== "all") {
            filter.category = category;
        }

        switch (sort) {
            case "lowToHigh": sortCriteria = { price: 1 }
                break;
            case "highToLow": sortCriteria = { price: -1 }
                break;
            default: sortCriteria = {}
                break;
        }

        // Fetch all products from the database
        const products: IProduct[] = await Product.find(filter).sort(sortCriteria);

        // Check if products are found
        if (!products || products.length === 0) {
            throw new CustomErrorHandler(500, 'No products found')
        }

        // Send products as response
        res.status(200).json(products);
    } catch (error) {
        // Log error and send error response
        const err = error as CustomError;
        console.log(err.message);
        res.status(err.status || 500).json({ message: err.message || 'Server Error' });
    }
};

export default allProducts;
