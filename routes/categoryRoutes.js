import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/auth.Middleware.js";
import {
  categoryController,
  createCategoryController,
  deletCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
// updated category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getall category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// deleted category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deletCategoryController
);

export default router;
