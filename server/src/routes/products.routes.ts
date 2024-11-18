
import { Router } from "express";
import allProducts  from "../controller/products.controller";
const router: Router = Router();

router.get("/all", allProducts);


export default router;