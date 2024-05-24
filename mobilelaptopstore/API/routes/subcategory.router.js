import express from 'express';
var router = express.Router();

//to link controller
import * as SubCategoryController from '../controller/subcategory.controller.js';

router.post("/save",SubCategoryController.save);

router.get("/fetch",SubCategoryController.fetch);

router.patch("/update",SubCategoryController.updateCategory);

router.delete("/delete",SubCategoryController.deleteCategory);

export default router;

