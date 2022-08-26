import React from "react";
import Header from '../layout/dashboardHeader'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

function Dashboard() {
//   let token = localStorage.getItem("authToken");
//   const [count, setCount] = useState(0);

useEffect(() => {
    toast("Login Successful!");
 });
  return (
    <div>
      {/* {" "} */}
      <Header />
      <div style={{ marginLeft: "40%" }}>
       Dashboard
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
      </div>
    </div>
  );
}

export default Dashboard;
