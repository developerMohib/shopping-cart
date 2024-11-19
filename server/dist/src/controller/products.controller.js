"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = __importDefault(require("../model/products.model"));
const CustomErrorHandler_1 = require("../../utils/CustomErrorHandler");
const allProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sort, category, search } = req === null || req === void 0 ? void 0 : req.query;
        console.log('14 ', search);
        const query = {};
        let sortCriteria = {};
        if (category && category !== "all") {
            query.category = category;
        }
        if (search) {
            query.productName = { $regex: search, $options: "i" }; // Case-insensitive search
        }
        switch (sort) {
            case "lowToHigh":
                sortCriteria = { price: 1 };
                break;
            case "highToLow":
                sortCriteria = { price: -1 };
                break;
            default:
                sortCriteria = {};
                break;
        }
        // Fetch all products from the database
        const products = yield products_model_1.default.find(query).sort(sortCriteria);
        // Check if products are found
        if (!products || products.length === 0) {
            throw new CustomErrorHandler_1.CustomErrorHandler(500, 'No products found');
        }
        // Send products as response
        res.status(200).json(products);
    }
    catch (error) {
        // Log error and send error response
        const err = error;
        console.log(err.message);
        res.status(err.status || 500).json({ message: err.message || 'Server Error' });
    }
});
exports.default = allProducts;
