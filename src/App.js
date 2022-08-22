import * as React from 'react';
import Login  from './page/login';
import Table from './page/table';
 import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Container } from "@mui/system"


export default function App() {
  return (


  <Container component="main" >
      {/* <Table/> */}
       <Login/>
      
     {/* <BrowserRouter>*/}
 <Routes> 

 <Route path='/add' element={<Login/>}/> 
 <Route path='/Table' element={<Table/>}/>
 </Routes>
{/* </BrowserRouter> */}
</Container>
)}