"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// home server basic
app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: "Hello SHOP server is ready"
    });
});
// server with port
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
