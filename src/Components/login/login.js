import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Container, TextField, CssBaseline, Typography, Grid } from '@mui/material';
import { BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';

import '../reg/components/Details.css'
export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [found,setFound]=useState(false);
  const [pass,setPass]=useState("");
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const handleClick=(event)=>{
    if(error==true)
    {
      setError(false);
    }
  const fetch=async()=>{
    const response=await axios.get(`http://localhost:3001/users`);
    response.data.map((obj)=>{
      if(obj.Email===email)
      {
       
        if(obj.Password!==password)
        {
          setError(true);
          setSuccess(false);
        }
        else
        {
          setSuccess(true);
        }
      }
    })
  }
  fetch();
  }
  return (
    <Container component="main" maxWidth="md">
    {error&&<Alert variant="filled" severity="error" sx={{width:"650px"}} className='alert-message'>
    UserName or password doesn't match
      </Alert>}
      {
       success&& <Alert  variant="filled" severity="success" sx={{width:"650px"}} className='alert-message'>
          Logged In successfully !
        </Alert>
      }
      <CssBaseline />
      <Grid container spacing={0} style={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} style={{ backgroundImage: 'url(https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* You can add additional content for larger screens if needed */}
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
          <Typography component="h1" variant="h5" sx={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>
            FreshHarvest Hub
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
            <FontAwesomeIcon icon={faUser} />
            <TextField variant="outlined" margin="normal" required fullWidth id="email" onChange={(event)=>setEmail(event.target.value)}  label="Email Address" name="email" autoFocus sx={{marginLeft:"5px"}}/>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
            <FontAwesomeIcon icon={faLock} />
            <TextField sx={{marginLeft:"5px"}} variant="outlined" margin="normal" required fullWidth name="password" onChange={(event)=>setPassword(event.target.value)} label="Password" type="password" id="password" />
          </div>
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}   style={{ margin: '24px 0' }}>
            Login
          </Button>
          <h6 style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Or</h6>
          <span style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>New User?</span><a href='/signup' style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>Register</a><br /><br/>
          <a href="#" style={{ color: 'black', marginBottom: '16px',fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400" }}>
            Forgot Password?
          </a>
          <Typography variant='h6' component={Link} to="/home">
<div class="box-1">
  <div class="btn btn-one">
    <span>Return to Home</span>
  </div>
</div></Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleIcon style={{ marginRight: '10px' }} />
            <FacebookIcon style={{ marginLeft: '5px' }} />
            <TwitterIcon style={{ marginLeft: '10px' }} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
