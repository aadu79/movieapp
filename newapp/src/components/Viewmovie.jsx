import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Viewmovie = () => {
    const [rows, setRows] = useState([]);
const navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/moviedetails')
            .then((res) => {
               setRows(res.data);
               console.log(res)
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }, []);


    function del_Value(id){
        axios.delete('http://localhost:3000/deletemovie/'+id).then((res)=>{
             alert('data deleted');
             window.location.reload();
        }).catch((error)=>{
              console.log(error)
        })
    }

    function update_Value(val){
      navigate('/addmovie',{state:{val}})
    }


    return (
       
       <Grid container spacing={2}>
            {rows.map((row, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {row.movieName}
                            </Typography>
                           
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {row.movieDirector}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {row.movieDescription}
                            </Typography>

                            <img src={row.movieImage} alt={row.movieName} style={{ width: '25%', height: 'auto' }} />
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' onClick={()=>{
                                update_Value(row)
                            }}>Update</Button>
                            <Button variant='contained' onClick={()=>{
                                del_Value(row._id)
                            }}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
       
    )
}

export default Viewmovie;
