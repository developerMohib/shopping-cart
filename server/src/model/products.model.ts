import mongoose, { Document, Schema } from "mongoose";

// Define the TypeScript interface for the product
interface IProduct extends Document {
    productName: string;
    price: number;
    category: string;
    amount: number;
    description: string;
    releaseYear: number;
    ratings: number;
    availability: string;
    image: string;
}

// create the mongoose schema
const productScheam: Schema<IProduct> = new Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ["smartphone", "tablet", "electronics", "laptop", "audio", "wearable", "camera", "home appliance",],
        },
        amount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        },
        ratings: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        availability: {
            type: String,
            required: true,
            enum: ["In Stock", "Limited Stock", "Out of Stock"],
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }

)
// Create the Mongoose model
const Product = mongoose.model<IProduct>("Product", productScheam)
export default Product;