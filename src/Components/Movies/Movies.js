import React,{useContext}from "react";
import { useNavigate } from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import Login from "../Login/Login";
import { CartContext } from "../../Context/Context"


const Movies = (props) => {
const {addToCart} = useContext(CartContext)
const navigate = useNavigate()
const pushToMoviePage=()=>{
  navigate(`/movies/${props.data.id}`)
}
  if (document.cookie=="" ||document.cookie== null){
  
    return <Login/>
  }
 
  return (<>

<div   style={{
        color: "white",
        height:"500px",
        marginTop:"20px",background: "rgba(0,0,0,0.25)",
      }} className="w-72 rounded-lg rounded-b-lg  mx-auto text-center grid gap-4 grid-cols-3 grid-rows-3 relative ">
  
    
    <div  onClick={pushToMoviePage}
      
      
      >
    
      <LazyLoadImage
        src={props.data.poster}
        width="288px"
        effect="blur"
        style={{borderRadius:"8px",height:"362px"}}
        
        
        />
  
      <div className="  w-72  absolute bottom-0 " style={{height:"120px",cursor:"pointer"}}>
        <h1> {props.data.title} </h1>
        <h1> imdb_rating: {props.data.imdb_rating} </h1>
        <h1> rank: {props.data.id} </h1>
      </div>
   
    </div>
    <div  style={{cursor:"grab"}} onClick={()=>addToCart({title:props.data.title,id:props.data.id,price:props.data.imdb_rating *1000})}>
      <svg style={{width:"40px" , position:"absolute",bottom:"10px",left:"10px"}}  fill="white"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><defs></defs><path className="fa-primary" d="M176 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 176 512s47.1-21.49 47.1-48S202.5 416 176 416zM276.6 180.6h38.86v38.85C315.4 230.7 324.7 240 336 240s20.57-9.257 20.57-20.57V180.6h38.86C406.7 180.6 416 171.3 416 160c0-11.31-9.256-20.57-20.57-20.57h-38.86V100.6c0-11.31-9.26-20.57-20.57-20.57s-20.57 9.256-20.57 20.57v38.85H276.6C265.3 139.4 256 148.7 256 160C256 171.3 265.3 180.6 276.6 180.6zM488 336H179.9L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336zM463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416z"/><path className="fa-secondary" d="M569.5 44.73C563.4 36.64 554.1 32 543.1 32H121.1l48.76 256h318.4c14.23 0 26.88-9.557 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73zM395.4 180.6h-38.86v38.85C356.6 230.7 347.3 240 336 240s-20.57-9.257-20.57-20.57V180.6H276.6C265.3 180.6 256 171.3 256 160C256 148.7 265.3 139.4 276.6 139.4h38.86V100.6c0-11.31 9.259-20.57 20.57-20.57s20.57 9.256 20.57 20.57v38.85h38.86C406.7 139.4 416 148.7 416 160C416 171.3 406.7 180.6 395.4 180.6z"/></svg>
    </div>

        </div>
  </>);
};

export default Movies;
