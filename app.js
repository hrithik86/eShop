const   express=require("express"),
        app=express(),
        bodyParser=require("body-parser"),
        path=require("path"),
        shopRoutes=require("./routes/shop"),
        adminData=require("./routes/admin");

//Bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//serving static folders
app.use(express.static(path.join(__dirname, 'public')));

//View engine
app.set("view engine","ejs");

app.use(shopRoutes);
app.use("/admin",adminData.routes);

app.listen(8080,()=>{
    console.log("server has started");
});