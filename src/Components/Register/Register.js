import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
  const [showPassword, setShowPassword] = useState(true);

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
          <div style={{ marginTop:"20px", width: "80%" }}>
            <input
              placeholder="Email"
              style={inputStyle}
              onChange={(e) => setEmailUser(e.target.value)}
            ></input>
          </div>
          <div style={{ marginTop:"20px",background: "#E7E7E7",width: "80%",display:"flex",alignItems:"center",height:"55px" }}>
          <VisibilityIcon onClick={()=>setShowPassword(!showPassword)}/>
     
            <input 
            type={showPassword==false ?'password' :'text'}
              placeholder="Password"
              onChange={(e) => {
                setPasswordUser(e.target.value);
              }}
              style={inputStyle}
            />
          
          </div>
          <div style={{  marginTop:"20px",width: "80%" }}>
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
