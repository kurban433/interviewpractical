var mongoose=require("mongoose")
var newSchema=mongoose.Schema({
    name:String,
    price:Number,
    Image:String
})
module.exports=mongoose.model("User",newSchema)