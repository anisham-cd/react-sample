import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
//  import { useNavigate } from "react-router-dom";
 const postURL = "http://localhost:3002/api/v1/login/add";


  function Login() {
  
// const[filter,SetFilter]=React.useState(true)
//  let navigate = useNavigate();
//  const[q,setQ]=useState("")
   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      let firstName= data.get('firstName');
      let lastName= data.get('lastName');
      let email= data.get('email');
      let password=data.get('password');
  const loginData={firstName,lastName,email,password}
  
    console.log("the data-->", loginData)
    alert("---submitted successfully---")

  axios.post(postURL, loginData)
      .then((response) => {
        let postData = response.data;
        console.log(" response data",response);
        console.log("postData",postData)
      
    //   postData == 200 ? navigate("./table") : navigate("./login");
      })
      // let code=setCode.code;
      // code == 200 ? navigate("./table") : navigate("./login");
      // function search (rows){
      //   return rows.fiter(
      //        (rows)=>
      //        rows.id().indexOf(q)>-1
      //    );
      // }
      // console.log(search)
    };   

 return (
  
   <Container component="main" maxWidth='xs' >
      <Typography component="h1" variant="h5" textAlign={'center'}>
       -- Login --
      </Typography>
      <Box component="form" onSubmit={handleSubmit} >

        <TextField
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus />

        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName" />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
         <Button
          type="submit"
          fullWidth
          variant="contained">
          Submit
        </Button>
      </Box>
     {/* <div>
       <div>
         <input type="text"
           value={q}
           onChange={(e) => setQ(e.target.value)} 
           />
       </div> */}
       {/* <div>
         <TableData baseURL={search(baseURL)} />
       </div> */}
     {/* </div> */}
    </Container>


  );
  }
  export default Login;