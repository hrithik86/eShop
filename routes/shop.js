const express=require("express");
const router=express.Router();
// const adminData=require("./admin");
const fs=require("fs");

router.get("/",(req,res)=>{
var products =  fs.readFileSync("storage.txt",'utf8');
console.log(products);    
    // const products=adminData.products;
    res.render("shop",{products:products,pageTitle:"Shop"})
});

module.exports=router;