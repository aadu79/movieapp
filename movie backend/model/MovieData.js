const mongoose=require("mongoose");
const MovieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    movieUrl:String
})
const MovieData=mongoose.model('moviedetail',MovieSchema);
module.exports=MovieData