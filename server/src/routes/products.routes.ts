
import { Router } from "express";
import {allProducts, cartProducts}  from "../controller/products.controller";
const router: Router = Router();

router.get("/all", allProducts);
router.post("/cart", cartProducts);


export default router;