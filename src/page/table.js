
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'
import SearchBar from "material-ui-search-bar";
import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Edit from './editLogin'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const getURL = "http://localhost:3002/api/v1/login/getloginData";
const editURL = "http://localhost:3002/api/v1/login/edit";

function TableData() {
    let navigate = useNavigate();
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
                })
        })
        fetchData()
    }, [])
    const requestSearch = (searchedVal) => {
        console.log("searched data", searchedVal);
        const filteredRows = postData?.filter((data) => {
            return data?.firstName.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setData(filteredRows)
    }
    console.log("row-->", row)
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
        useEffect(() => {
            toast("Login Successful!");
        });
    }
    const detail = (state) => {
        navigate("/Edit", { state });

        // navigate("/Edit");
        <Edit />
    };


    return (
        <div>
            <h4 style={{ textAlign: "center" }}>Login Table</h4>
            <SearchBar
                style={{
                    width: "50%",
                    border: "solid 2px",
                    color: "blue",
                }}
                placeholder="Search"
                onChange={(searchedVal) => requestSearch(searchedVal)}
                onCancelSearch={() => CancelSearch()} />
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                            <TableCell>
                                <Button
                                    variant="contained"
                                    style={{
                                        color: "white",
                                        margin: "10px",
                                        background: "green",
                                    }}
                                    onClick={() => detail(item)}
                                >
                                    Edit
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
export default TableData;



