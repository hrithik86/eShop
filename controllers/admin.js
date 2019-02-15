const Product=require("../models/product");

exports.getAddProduct = (req,res)=>{
    res.render("admin/add-product",{pageTitle:"Add product"});
}
exports.postAddProduct=(req,res)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect("/");
}
exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products=>{
    res.render("admin/products",{products:products,pageTitle:"Shop"})
    });
}