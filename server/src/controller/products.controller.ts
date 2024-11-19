import { Request, Response } from 'express';
import Product, { IProduct } from '../model/products.model';
import { CustomErrorHandler } from '../../utils/CustomErrorHandler';

interface CustomError {
    message: string;
    status?: number;
}

export const allProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sort, category, search, currentPage } = req?.query;
        const query: any = {};
        let sortCriteria: any = {};
        const page: number = parseInt(currentPage as string, 10) || 1;
        const limit: number = 8;
        const skip: number = (page - 1) * limit;

        if (category && category !== "all") {
            query.category = category;
        }
        if (search) {
            query.productName = { $regex: search, $options: "i" }; // Case-insensitive search
        }

        switch (sort) {
            case "lowToHigh": sortCriteria = { price: 1 }
                break;
            case "highToLow": sortCriteria = { price: -1 }
                break;
            default: sortCriteria = {}
                break;
        }

        const totalProducts: number = await Product.estimatedDocumentCount(query)
        const totalPages: number = Math.ceil(totalProducts / limit)

        // Fetch all products from the database
        const products: IProduct[] = await Product.find(query).sort(sortCriteria).skip(skip).limit(limit);

        // Check if products are found
        if (!products || products.length === 0) {
            throw new CustomErrorHandler(500, 'No products found')
        }

        // Send products as response
        res.status(200).json({ products, totalProducts, totalPages });
    } catch (error) {
        // Log error and send error response
        const err = error as CustomError;
        console.log(err.message);
        res.status(err.status || 500).json({ message: err.message || 'Server Error' });
    }
};
