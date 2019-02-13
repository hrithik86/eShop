const   express=require("express"),
        router=express.Router(),
        productsController=require("../controllers/products");

router.get("/add-product",productsController.getAddProduct);

router.post("/add-product",productsController.postAddProduct);

module.exports=router;
