var express=require("express")
var app=express();
var mongoose=require("mongoose")
var UUser=require("./model/index")
var bodyparcer=require("body-parser")
app.use(bodyparcer.urlencoded({extended:true}))
app.use(bodyparcer.json());

mongoose.connect("mongodb://localhost:27017/Practical")
.then(()=>{
    console.log("connection done");
})
.catch((e)=>{
    console.log("error");
})

app.set("view engine","ejs")


app.get("/",(req,res)=>{
     res.render("index")
})

app.post("/insert",(req,res)=>{
   var user= new UUser({
       name:req.body.name,
       price:req.body.price,
       Image:req.body.img

   })

//    console.log(name);

   user.save(()=>{
       res.redirect("show");
   })
    
})
app.get("/show",(req,res)=>{

    UUser.find({},(err,result)=>{
        res.render("show",{user:result})
    })
})


app.listen("8000",()=>{
    console.log("server create");
})