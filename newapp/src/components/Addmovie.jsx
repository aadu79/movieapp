import React, { useEffect } from 'react'
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Addmovie = () => { 
  const [form,setForm]=useState({
    movieName:"",
    movieDirector:"",
    movieDescription:"",
    movieImage:""
  })
 
  const location=useLocation();


function fieldValue(event){
  setForm({...form,[event.target.name]:event.target.value})
}



function valueAdd(){

  if (location.state!=null) {
    axios.put('http://localhost:3000/editmovie/'+location.state.val._id,form).then((res)=>{
      alert('data updated')
    }).catch((error)=>{
      console.log(error)
    })

  }
  
  
  else {

    axios.post('http://localhost:3000/addmovie',form).then((res)=>{
      alert('Data Added')
      }).catch((error)=>{
        console.log(error)
      })
    
  }

}

useEffect(()=>{

if (location.state!=null) {

  setForm({...form,movieName:location.state.val.movieName,
    movieDirector:location.state.val.movieDirector,
    movieDescription:location.state.val.movieDescription,
    movieImage:location.state.val.movieImage})

} else {
  
  setForm({...form, movieName:"",
    movieDirector:"",
    movieDescription:"",
    movieImage:""})

}

},[])

  return (
    
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField 
      required
      id="a"
     label="Movie Name" 
     name='movieName' 
    
     onChange={fieldValue} 
     value={form.movieName} /></div><br />

    <div><TextField
    required
     id="bc" 
     label="Movie Description" 
     name='movieDescription' 
   
      onChange={fieldValue}
      value={form.movieDescription}/></div><br />

    <div><TextField
    required
     id="bc"
      label="Movie Director"
       name='movieDirector' 
     
       onChange={fieldValue}
       value={form.movieDirector}/></div><br />
    
    <div><TextField 
    required
    id="x"
     label="Movie Img url"
      name='movieImage' 
    
      onChange={fieldValue}
      value={form.movieImage}/></div><br />

    <div><Button 
    variant='contained' 
    onClick={valueAdd}>Add</Button></div>

  </Box>
    
  )
}

export default Addmovie