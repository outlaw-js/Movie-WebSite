import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import Spinner from "../Spinner/Spinner";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import Login from "../Login/Login";
const Movie = () => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setLoading] = useState(true);
    const [state,setState]=useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then(function(res){
      setProgress(100)
setState(res.data)
setLoading(false)
    })
  }, [id]);
// if (isLoading){
//   return <Spinner/>
// }
setTimeout(() => {
}, 5000);
if (sessionStorage.getItem("Token")=="" ||sessionStorage.getItem("Token")== null){

  return <Login/>
 }
return (
    <>
    <LoadingBar color="#f11946" height="4px" progress={progress} onLoaderFinished={() => setProgress(0)} />
    <div className="w-full h-screen mx-auto bg-slate-700 ">
      <div className="w-full h-2/4 flex flex-auto">
         {state.images!==undefined
?state.images.map((item , i)=>{
        return <div key={i}>
        <LazyLoadImage
          alt={item}
          src={item} 
          width={"100%"}
          height="530px"
          effect={"blur"}
          />
      </div>
        }):""}
      </div>
      <h1>{state.title}</h1>
      <h1>{state.year}</h1>
      <h1>{state.director}</h1>
      <h1>{state.country}</h1>
    </div>
    </>
  );
};

export default Movie;
