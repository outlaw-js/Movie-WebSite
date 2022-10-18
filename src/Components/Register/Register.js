import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Formik ,useFormik} from "formik";

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
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const pushToLogin = () => {
    navigate(`/login`);
  };
  
  return (
    <>
        <div style={divContainer}>
        <div style={LoginBox}>
          <h1 style={titleForm}>Register</h1>
          <Formik 
       initialValues={{ email: '', password: '',username:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         }
         if (values.password=="") {
           errors.password = 'Required';
         }
         if (values.password.length <6 && values.password.length!==0) {
           errors.password = 'The length is less than 5';
         }
         if (!values.username) {
           errors.username = 'Required';
         }
          else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        const body1 = {
      email: values.email,
      fullname: values.username,
      password: values.password,
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
        setSubmitting(true)
       
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
          
          })
          setTimeout(()=>{
            setSubmitting(false)
          },3000)      });
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
         <div style={{position:"relative",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
         
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
         <div style={{ margin:"20px 0px 20px 0px" ,background: "#E7E7E7",width: "80%",display:"flex",alignItems:"center",height:"55px" }}>
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
           {<span style={{color:"red" , textAlign: "left",width:"80%"}}>{errors.password && touched.password && errors.password}</span>}
           <div style={{ width: "80%" ,marginBottom:"20px"}}>

           <input style={inputStyle}
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
             placeholder="username"
           />
           {<span style={{color:"red"}}>{errors.username && touched.username && errors.username}</span>}
         </div>
          
         </div>
           <button type="submit"  style={buttonFormStyle} disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
          <div style={checkDivStyle}>
            <input
              type="checkbox"
              name="Remember me"
              style={{ border: "1px solid #C34C89" }}
            />
            <label>Remember me</label>
          </div>
        
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
}

export default Register;
