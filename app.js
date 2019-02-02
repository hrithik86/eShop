const   express=require("express")
        app=express();


app.get("/",(req,res)=>{
    res.send("HOMEPAGE");
})

app.listen(8080,()=>{
    console.log("server has started");
})