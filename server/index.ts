import express, { Request, Response } from 'express';
import cors from "cors"
import connectDB from './src/config/db';
import productRoutes from "./src/routes/products.routes"
import errorHandler from './middlewar/errorHandler';


const app = express()
connectDB().catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
});

// middleware
app.use(express.json())
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


// app.use(cors())

// data getting api
app.use("/product", productRoutes)


// home server basic
app.get('/', (req: Request, res: Response): void => {
    res.send({
        status: 200,
        message: "Hello SHOP server is ready"
    })
})

// Handle unreachable routes
app.all("*", (req: Request, res: Response): void => {
    res.status(400).json({
        status: false,
        message: "Route not found"
    })
})

// error handler 
app.use(errorHandler)

// server with port
const port: (number | string) = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})