import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
interface CustomError {
    message: string;
}
const connectDB = async (): Promise<void> => {
    try {
        const uri: string | undefined = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MongoDB URI is not defined in environment variables")
        } else {
            await mongoose.connect(uri)
            console.log("MongoDB connected successfully")
        }
    } catch (error) {
        console.log("MongoDB connection error:", (error as CustomError).message)
    }
}
export default connectDB