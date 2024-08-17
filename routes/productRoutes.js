import express from "express";
import { isAdmin, requireSignIn } from "../middleware/auth.Middleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deletProductController,
  getProductedController,
  getSingleProductedController,
  productCategoryController,
  productCountController,
  productedPhotoController,
  productFiltersController,
  productListController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//updted product

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductedController);

//single products

router.get("/get-product/:slug", getSingleProductedController);

// photo

router.get("/product-photo/:pid", productedPhotoController);

// delete product
router.delete("/delete-product/:pid", deletProductController);

//filter product

router.post("/product-filters", productFiltersController);

// product count

router.get("/product-count", productCountController);

// product per page

router.get("/product-list/:page", productListController);

// Search product

router.get("/search/:keyword", searchProductController);

//similar product

router.get("/related-product/:pid/:cid", relatedProductController);

//caterory wise product

router.get("/product-category/:slug" , productCategoryController)

// Payment routes
//token

router.get("/braintree/token",braintreeTokenController)

//payment
router.post("/braintree/payment",requireSignIn,braintreePaymentController)



export default router;
