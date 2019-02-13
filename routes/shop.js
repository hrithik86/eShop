const express=require("express");
const router=express.Router();
const adminData=require("./admin");
const fs=require("fs");
const productController=require("../controllers/products");

router.get("/",productController.getProducts);

module.exports=router;