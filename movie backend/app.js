const express=require('express');
const app=new express();
const cors=require('cors');
require('./connection');
app.use(express.json());
app.use(cors());
const movieModel=require('./model/MovieData');



//post:
app.post('/addmovie',async(req,res)=>{
    try{
        var item=req.body; //the attached data sent  in req.body is assigned to item
        const data_add=new movieModel(item);
        const data= await data_add.save();
        res.send('post successful');
    }
    catch (error){
      console.log(error);
    }
})

//get:
app.get('/moviedetails', async(req,res)=>{

    try{
        const data = await movieModel.find();
 res.send(data);
    }

    catch(error){
        console.log(error);
    }
 
})

//put:
app.put('/editmovie/:id',async(req,res)=>{
    try {
        const data= await movieModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('update successful')
    } catch (error) {
        console.log(error);
    }
})


//delete:
app.delete('/deletemovie/:id',async(req,res)=>{
    try {
        const data= await movieModel.findByIdAndDelete(req.params.id)
        res.send('delete successful')
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})