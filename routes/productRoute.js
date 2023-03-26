import express from "express";
import {requireSignIn,isAdmin} from './../middlewares/authMiddleware.js';
import {brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController} from './../controllers/productController.js'
import formidable from "express-formidable";

const router=express.Router();



//routes

//create product
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//get all products
router.get('/get-product',getProductController);


//get single products
router.get('/single-product/:slug',getSingleProductController);


//get photo products
router.get('/product-photo/:pid',productPhotoController);
      

//delete products
router.delete('/delete-product/:pid',requireSignIn,isAdmin,deleteProductController);

//update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//filter product
router.post('/product-filter',productFiltersController)

//product count
router.get('/product-count',productCountController)

//product page
router.get('/product-list/:page',productListController)

//search product
router.get('/search/:keyword',searchProductController)

//related product
router.get('/related-product/:pid/:cid',relatedProductController)

//cat wise product
router.get('/product-category/:slug',productCategoryController)

//payments route
//token 
router.get('/braintree/token',braintreeTokenController)

//payments 
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

export default router