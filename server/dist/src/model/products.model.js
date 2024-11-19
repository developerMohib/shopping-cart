"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// create the mongoose schema
const productScheam = new mongoose_1.Schema({
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
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
// Create the Mongoose model
const Product = mongoose_1.default.model("Product", productScheam);
exports.default = Product;
