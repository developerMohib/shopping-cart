import express, { Request, Response } from 'express';
import cors from "cors"
import connectDB from './src/config/db';
import productRoutes from "./src/routes/products.routes"


const app = express()
connectDB()
// middleware
app.use(express.json())
app.use(cors())

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

// server with port
const port: (number | string) = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})