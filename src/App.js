import * as React from 'react';
import Login  from './page/login';
import Table from './page/table';
// import { Routes, Route } from "react-router-dom";

import { Container } from "@mui/system"


export default function App() {
  return (


  <Container component="main" >
      <Table/>
       <Login/>
       </Container>
      //  </Routes>
       )
      }
{/* <Routes>
(login&table)
<Route path='/add' element={<Login/>}/> */}