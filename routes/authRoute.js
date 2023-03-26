import express from "express";
import { registerController, loginController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router=express.Router();

//routing
//REGISTER //POST METHOD

router.post('/register',registerController); 

//login
router.post('/login',loginController);

//protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//forgot password
router.post('/forgot-password',forgotPasswordController);

//update profile
router.put('/profile',requireSignIn,updateProfileController);

//order
router.get('/orders',requireSignIn,getOrdersController)

//allorders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

//status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)


export default router;