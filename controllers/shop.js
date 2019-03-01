const Product=require("../models/product");

exports.getProducts=(req,res)=>{
    Product.fetchAll(products=>{
        res.render("shop/product-list",{products:products,pageTitle:"Shop"})
    });
   
}
exports.getIndex=(req,res,next)=>{
    Product.fetchAll(products=>{
    res.render("shop/index",{products:products,pageTitle:"Shop"})
    });
}
exports.getCart=(req,res,next)=>{
    res.render("shop/cart",{pageTitle:"Your cart"});
}

exports.getCheckout=(req,res,next)=>{
    res.render("shop/checkout",{pageTitle:"Checkout"});
}

exports.getOrders=(req,res,next)=>{
    res.render("shop/orders",{pageTitle:"Your Orders"});
}

exports.getDetails=(req,res,next)=>{
    const prodid=req.params.id;
    Product.fetchAll(products=>{
        res.render("shop/product-detail",{products:products,prodid:prodid,pageTitle:"Product Details"})
    });
}