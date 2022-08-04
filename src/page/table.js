
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'
import SearchBar from "material-ui-search-bar";
import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';

const getURL = "http://localhost:3002/api/v1/login/getloginData";
    const editURL = "http://localhost:3002/api/v1/login/edit";

function TableData() {
    const [postData, setData] = useState([])
    const [searched, setSearched] = useState([])
    const [row, setRow] = useState([])
    


    useEffect(() => {
        const fetchData = (() => {
            fetch(getURL)
                .then((res) =>
                    res.json())
                .then((response) => {
                    setData(response.data);
                    // console.log("---getting data---", response.data)
                })
        })
        fetchData()
    }, [])

    const requestSearch = (searchedVal) => {
        console.log("searched data",searchedVal);
        const filteredRows = postData?.filter((data) => {
            return data?.firstName.toLowerCase().includes(searchedVal.toLowerCase());
           });
           setData(filteredRows);
        console.log("filterData",filteredRows);
    }
    console.log("row-->",row)

        const CancelSearch = () => {
            setSearched("");
            requestSearch(searched);

          useEffect(() => {
            axios
             .then((response) => {
                setData(response.data);
                setRow(response.data);
                
              })
            })
    }

    return (
        <TableContainer sx={{ maxHeight: '500px', maxWidth: '1000px' }}>
         
            <Typography component="h1" variant="h5" textAlign={'center'}>
                ---Login Table---
            </Typography>
          <SearchBar 
           style={{
            width: "50%",
            border: "solid 2px",
            color: "blue",
           }}
            placeholder="Search"
            onChange={(searchedVal) => requestSearch(searchedVal)}
            onCancelSearch={() => CancelSearch()}/>
            <Box component="form" >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><b>id</b></TableCell>
                            <TableCell align='center'><b>FirstName</b></TableCell>
                            <TableCell align='center'><b>LastName</b></TableCell>
                            <TableCell align='center'><b>email</b></TableCell>
                            <TableCell align='center'><b>password</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postData?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell align='center'>{item.id}
                                </TableCell>
                                <TableCell align='center'>{item.firstName}
                                </TableCell>
                                <TableCell align='center'>{item.lastName}
                                </TableCell>
                                <TableCell align='center'>{item.email}
                                </TableCell>
                                <TableCell align='center'>{item.password}
                                </TableCell>
                                <TableCell><Button
                                    variant="contained"
                                    style={{
                                        color: "white",
                                        margin: "10px",
                                        background: "blue",
                                    }}>
                                        Edit
                                    {/* //onClick={() => detail(data)}
                                    // Edit */}
                                </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {/* <h1>React Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div> */}
        </TableContainer>

    );
}
export default TableData;



