import axios from "axios";
import React, { useState, useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import VisibilityIcon from '@mui/icons-material/Visibility';
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
import { Formik } from "formik";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [token,setToken] = useState("")
  const pushToRegister = () => {
    navigate(`/register`);
  };


  return (
    <>
      <div style={divContainer}>
        <div
          style={LoginBox}
          className="w-80 h-108 mobile:w-full mobile:h-full"
        >
          <h1 style={titleForm}>Login</h1>
          <Formik 
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         }
         if (!values.password) {
           errors.password = 'Required';
         }
          else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios
      .post(
        "https://toplearnapi.ghorbany.dev/api/login",
        JSON.stringify(values),
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
          
          setSubmitting(false);
        }
      })
      .catch((error) => {
        setTimeout(()=>{

        setSubmitting(false);
        },3000)

        toast.error('مشکلی پیش امده')
      });
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} style={{width:"100%" ,display:"flex",alignItems:"center",flexDirection:"column"}}>
         <div style={{ width: "80%" }}>

           <input style={inputStyle}
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="email"
           />
           {<span style={{color:"red"}}>{errors.email && touched.email && errors.email}</span>}
         </div>
         <div style={{ margin:"20px 0px 10px 0px" ,background: "#E7E7E7",width: "80%",display:"flex",alignItems:"center",height:"55px" }}>
         <VisibilityIcon onClick={()=>setShowPassword(!showPassword)}/>
           <input style={inputStyle} 
              type={showPassword==false ?'password' :'text'}
             name="password"
             placeholder="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
         </div>
           {<span style={{color:"red",marginRight:"220px"}}>{errors.password && touched.password && errors.password}</span>}
           <button type="submit"  style={buttonFormStyle} disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
          
         
          
          
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
