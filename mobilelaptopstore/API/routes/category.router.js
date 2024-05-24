import express from 'express';
var router = express.Router();

//to link controller
import * as CategoryController from '../controller/category.controller.js';

router.post("/save",CategoryController.save);

router.get("/fetch",CategoryController.fetch);

router.patch("/update",CategoryController.updateCategory);

router.delete("/delete",CategoryController.deleteCategory);

export default router;