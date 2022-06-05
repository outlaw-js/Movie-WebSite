import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import "./font/font.css";
// import Header from "./Header";
import {
  LoginBox,
  buttonFormStyle,
  divContainer,
  inputStyle,
  checkDivStyle,
  titleForm,
  pushToLogOrReg,
  divContainerFlex,
} from "../Login/LoginStyle";
const Register = () => {
  const navigate = useNavigate();
  const pushToLogin = () => {
    navigate(`/login`);
  };
  const submitForm = () => {
  
    const body1 = {
      email: emailUser,
      fullname: username,
      password: passwordUser,
    };
    const bodyJson = JSON.stringify(body1);
    axios
      .post("https://toplearnapi.ghorbany.dev/api/register", bodyJson, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success('کاربر با موفقیت ساخته شد', {
            position: "top-right",
            
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            });
            setTimeout(() => {
              navigate(`/login`);
            }, 4000);
        }
       
      })
      .catch((err) => {
        toast.error('مشکلی پیش امده است', {
          position: "top-right",
          
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
          });
      });
  };

  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [username, setUsername] = useState("");
  return (
    <>
        <div style={divContainer}>
        <div style={LoginBox}>
          <h1 style={titleForm}>Register</h1>
          <div style={{ width: "80%" }}>
            <input
              placeholder="Email"
              style={inputStyle}
              onChange={(e) => setEmailUser(e.target.value)}
            ></input>
          </div>
          <div style={{ width: "80%" }}>
            <input
              placeholder="Password"
              style={inputStyle}
              onChange={(e) => setPasswordUser(e.target.value)}
            ></input>
          </div>
          <div style={{ width: "80%" }}>
            <input
              placeholder="name"
              style={inputStyle}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div style={checkDivStyle}>
            <input
              type="checkbox"
              name="Remember me"
              style={{ border: "1px solid #C34C89" }}
            />
            <label>Remember me</label>
          </div>
          <button style={buttonFormStyle} onClick={submitForm}>
            REGISTER
          </button>
          <Link to={`/login`} style={pushToLogOrReg}>
            if you member login now
          </Link>
        </div>

{/* Same as */}
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      

    </>
  );
};

export default Register;
