import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FactoryIcon from "@mui/icons-material/Factory";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import BadgeIcon from "@mui/icons-material/Badge";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const baseURL =  "http://localhost:3002/api/v1/login/edit";
export default function EditEmployee() {
  const [postData, setPostData] = React.useState();
  const [error, setError] = React.useState(null);

  let navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [initialData, setInitialData] = React.useState({ ...state });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let email = data.get('email');
    let password = data.get('Password');
    const loginData = { firstName, lastName, email, password }
    // console.log(employeeData);
    // let token = localStorage.getItem("authToken");
    // const config = {
    //   headers: { authToken: token },
    // };
    axios
      .put(baseURL, loginData)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => setError(error));
    let code = postData.code;
    console.log(postData);
    code == 200 ? navigate("/Table") : navigate("/editLogin");
  };
  const [dob, SetDob] = React.useState();
  const handleDate = (e) => {
    SetDob(e.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          boxShadow: "2px 4px 10px 1px",
          borderRadius: "10px",
          paddingBottom: "30px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            <BadgeIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "black" }}>
            Edit Table
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              firstName
              name="firstName"
              required
              margin="normal"
              fullWidth
              id="firstName"
              autoComplete="First Name"
              label="First Name"
              autoFocus
              value={initialData.firstName}
              onChange={(e) =>
                setInitialData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <TextField
                required
                margin="normal"
                fullWidth
                id="lastName"
                autoComplete="LastName"
                label="Last Name"
                name="lastName" 
              value={initialData.lastName}
              onChange={(e) =>
                setInitialData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
            <TextField
               required
               email
               margin="normal"
               fullWidth
               id="email"
               autoComplete="Email Address"
               label="Email Address"
               name="email" 
              autoFocus
              value={initialData.email}
              onChange={(e) =>
                setInitialData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
           
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "white", background: "green" }}
            >
              Update Employee
            </Button>
          </Box>
        </Box>
        <Link to="/Table">
          <Button
            type="submit"
            variant="contained"
            style={{
              marginLeft: "10px",
              margin: "10px",
              color: "white",
              background: "red",
            }}
          >
            <ArrowBackIcon />
            Back
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
}
