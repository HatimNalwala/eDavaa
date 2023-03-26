import express from "express";
import {createCategoryController,updateCategoryController, categoryController, deleteCategoryController, singleCategoryController } from "../controllers/categoryController.js";
import {requireSignIn,isAdmin} from './../middlewares/authMiddleware.js'

const router=express.Router();

//routes


//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update cate
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);

//get all cate
router.get('/get-category',categoryController);

//get single category
router.get('/single-category/:slug',singleCategoryController);

//delete cate
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);

export default router;