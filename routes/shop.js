const express=require("express");
const router=express.Router();
const adminData=require("./admin");
const fs=require("fs");
const shopController=require("../controllers/shop");

router.get("/",shopController.getIndex);
router.get("/products",shopController.getProducts);
router.get("/cart",shopController.getCart);
router.get("/checkout",shopController.getCheckout);
router.get("/orders",shopController.getOrders);
router.get("/products/:id",shopController.getDetails);

module.exports=router;