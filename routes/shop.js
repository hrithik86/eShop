const express=require("express");
const router=express.Router();

router.get("/add-products",(req,res)=>{
    res.render("add-product");
});

router.post("/",(req,res)=>{
    console.log(req.body.title);
    product={
        title:req.body.title
        // image:req.body.image
    }
products.push(product);
// products.save();
res.render("shop",{products:products});
})

module.exports=router;