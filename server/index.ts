// 1. Import Statements
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./src/config/db";
import productRoutes from "./src/routes/products.routes";
import errorHandler from "./middlewar/errorHandler";

// 2. Database Connection
connectDB().catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});

// 3. Application Initialization
const app = express();

// 4. Middleware Setup

// 4.1. JSON Parsing Middleware
app.use(express.json());

// 4.2. CORS Configuration
const allowedOrigins = [
  "http://localhost:4000",
  "http://localhost:5173",
  "https://shopping-cart-eight-omega.vercel.app",
  "https://shopping-cart-with-ts-server.vercel.app",
];
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
};

app.use(cors(corsOptions));

// 4.3. Handle Preflight Requests
app.options("*", cors(corsOptions));

// 5. API Routes
app.use("/product", productRoutes);

// 6. Home Route
app.get("/", (req: Request, res: Response): void => {
  res.send({
    status: true,
    message: "Hello, SHOP server is ready",
  });
});

// 7. Handle Unreachable Routes
app.all("*", (req: Request, res: Response): void => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

// 8. Error Handling Middleware
app.use(errorHandler);

// 9. Start the Server
const port: string | number = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
