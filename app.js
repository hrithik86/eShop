const   express=require("express")
        app=express();
        bodyParser=require("body-parser");
        path=require("path");
        shopRoutes=require("./routes/shop");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
products=[
    {
        title:"car"
    },
    {
        title:"scooty"
    }
];


app.get("/",(req,res)=>{
    res.render("shop");
})
app.set("view engine","ejs");        

app.use(shopRoutes);


app.listen(8080,()=>{
    console.log("server has started");
})