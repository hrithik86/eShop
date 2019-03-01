const   express=require("express"),
        router=express.Router(),
        adminController=require("../controllers/admin");

router.get("/add-product",adminController.getAddProduct);

router.post("/add-product",adminController.postAddProduct);

router.get("/products",adminController.getProducts);

router.get("/edit-product",adminController.editProduct);

module.exports=router;
