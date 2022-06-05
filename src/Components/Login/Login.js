import axios from "axios";
import React, { useState, useEffect ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../../font/font.css";
import 'react-toastify/dist/ReactToastify.css';
import {
  LoginBox,
  buttonFormStyle,
  divContainer,
  inputStyle,
  checkDivStyle,
  titleForm,
  pushToLogOrReg,
} from "./LoginStyle";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token,setToken] = useState("")
  const pushToRegister = () => {
    navigate(`/register`);
  };
  const user = { email, password };
  const jsonUser= JSON.stringify(user)
  const LoginHandler = () => {
    axios
      .post(
        "https://toplearnapi.ghorbany.dev/api/login",
        jsonUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        
        if(res.status===200){
          setToken(res.data.token)
          document.cookie = `token=${res.data.token};max-age=3600;path=/;`;

          toast.success('با موفقیت وارد شدید')
          setTimeout(() => {
            navigate(`/`)
            window.location.reload();
          }, 3000);
          
        }
      })
      .catch((error) => {
        toast.error('مشکلی پیش امده')
      });
    };
    useEffect(() => {
      
    }, [email, password]);

  return (
    <>
      <div style={divContainer}>
        <div
          style={LoginBox}
          className="w-80 h-108 mobile:w-full mobile:h-full"
        >
          <h1 style={titleForm}>Login</h1>
          <div style={{ width: "80%" }}>
            <input
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={inputStyle}
            ></input>
          </div>
          <div style={{ width: "80%" }}>
            <input
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={inputStyle}
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
          <button style={buttonFormStyle} onClick={LoginHandler}>
            LOGIN
          </button>
          <h4 onClick={pushToRegister} style={pushToLogOrReg}>
            Not a member? Sign up now
          </h4>

          {/* <button style={buttonFormStyle} onClick={pushToRegister}>REGISTER</button> */}
        </div>
       
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

export default Login;
