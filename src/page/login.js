import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dashboard from './dashboard';
import Table from './table'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { Dashboard } from '@mui/icons-material';

const postURL = "http://localhost:3002/api/v1/login/add";


function Login() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let email = data.get('email');
    let password = data.get('Password');
    const loginData = { firstName, lastName, email, password }

    console.log("the data-->", loginData)
    alert("---submitted successfully---")

    axios.post(postURL, loginData)
      .then((response) => {
        let postData = response.data;
        console.log(" response data", response);
        console.log("postData", postData)
      })
    navigate("/Table");
    <Table />
// navigate("/Dashboard");
// <Dashboard/>
  };

  return (

    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: "8%",
        boxShadow: "2px 4px 10px 1px",
        borderRadius: "10px",
        paddingBottom: "30px",
      }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <Avatar sx={{ m: 1, bgcolor: "blue" }}>
     <HowToRegIcon/>
    </Avatar>

        <Typography component="h1" variant="h5" sx={{ color: "black" }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>

          <TextField
            firstName
            name="firstName"
            required
            margin="normal"
            fullWidth
            id="firstName"
            type="First Name"
            label="First Name"
            autoFocus />
          <TextField
            required
            margin="normal"
            fullWidth
            id="lastName"
            type="LastName"
            label="Last Name"
            name="lastName" />
          <TextField
            required
            email
            margin="normal"
            fullWidth
            id="email"
            type="Email Address"
            label="Email Address"
            name="email" />
          <TextField
            required
            password
            margin="normal"
            fullWidth
            id="Password"
            type="Password"
            label="Password"
            name="Password" />
            <Button
            type="submit"
            fullWidth
            variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>


  );
}
export default Login;