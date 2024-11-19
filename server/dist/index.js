"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./src/config/db"));
const products_routes_1 = __importDefault(require("./src/routes/products.routes"));
const errorHandler_1 = __importDefault(require("./middlewar/errorHandler"));
const app = (0, express_1.default)();
(0, db_1.default)().catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
});
// middleware
app.use(express_1.default.json());
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
// app.use(cors())
// data getting api
app.use("/product", products_routes_1.default);
// home server basic
app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: "Hello SHOP server is ready"
    });
});
// Handle unreachable routes
app.all("*", (req, res) => {
    res.status(400).json({
        status: false,
        message: "Route not found"
    });
});
// error handler 
app.use(errorHandler_1.default);
// server with port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
