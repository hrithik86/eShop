const products=[];

exports.getAddProduct = (req,res)=>{
    res.render("add-product",{pageTitle:"Add product"});
}
exports.postAddProduct=(req,res)=>{
    product={
        title:req.body.title
    }
products.push(product);
res.redirect("/");
}
exports.getProducts=(req,res)=>{
    res.render("shop",{products:products,pageTitle:"Shop"})
}