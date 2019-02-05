const   express=require("express"),
        router=express.Router();

const products=[];

router.get("/add-product",(req,res)=>{
res.render("add-product",{pageTitle:"Add product"});
});

router.post("/add-product",(req,res)=>{
    console.log(req.body.title);
    product={
        title:req.body.title
    }
products.push(product);
res.redirect("/");
})

exports.routes=router;
exports.products=products;