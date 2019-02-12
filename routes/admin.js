const   express=require("express"),
        router=express.Router();
        fs=require("fs");

// const products=[];

router.get("/add-product",(req,res)=>{
res.render("add-product",{pageTitle:"Add product"});
});

router.post("/add-product",(req,res)=>{
    product={
        title:req.body.title
    }
// products.push(product);
var data=(JSON.stringify(product));
fs.appendFile("storage.txt",data,(err)=>{
    if(err){
        throw err;
    }
    console.log("saved");
})
res.redirect("/");
})

exports.routes=router;
// exports.products=products;