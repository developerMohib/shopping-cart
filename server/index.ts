import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import connectDB from "./src/config/db";
import productRoutes from "./src/routes/products.routes";
import errorHandler from "./middlewar/errorHandler";

const app = express();
connectDB().catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});

// Middleware to parse JSON
app.use(express.json());

// Define allowed origins
const allowedOrigins = [
  "http://localhost:4000",
  "http://localhost:5173",
  "https://shopping-cart-eight-omega.vercel.app",
  "https://shopping-cart-with-ts-server.vercel.app",
];

const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: Origin ${origin} is not allowed`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  optionsSuccessStatus: 200,
};

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://shopping-cart-eight-omega.vercel.app"
  ); // Replace with your allowed origin
  res.header(
    "Access-Control-Allow-Origin",
    "https://shopping-cart-with-ts-server.vercel.app"
  ); // Replace with your allowed origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowed HTTP methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allowed headers
  next();
});

// Middleware for CORS
app.use(cors(corsOptions));
// Handle preflight requests explicitly
app.options("*", cors(corsOptions));

// data getting api
app.use("/product", productRoutes);

// home server basic
app.get("/", (req: Request, res: Response): void => {
  res.send({
    status: true,
    message: "Hello SHOP server is ready",
  });
});

// Handle unreachable routes
app.all("*", (req: Request, res: Response): void => {
  res.status(400).json({
    status: false,
    message: "Route not found",
  });
});

// error handler
app.use(errorHandler);

// server with port
const port: string | number = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
