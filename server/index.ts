import express, { Request, Response } from 'express';
import cors from "cors"
import connectDB from './src/config/db';
import productRoutes from "./src/routes/products.routes"
import errorHandler from './middlewar/errorHandler';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
connectDB().catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
});

// Middleware to parse JSON
app.use(express.json());

// Define CORS options
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'https://shopping-cart-eight-omega.vercel.app',
        'https://shopping-cart-server-eta.vercel.app'
    ],
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 200, // For legacy browsers
};

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});


// Use the cors middleware
app.use(cors(corsOptions));
const apiBaseUrl = process.env.REACT_APP_API_URL;

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
});

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

const server = app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
server.setTimeout(120000);