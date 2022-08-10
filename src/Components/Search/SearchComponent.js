import axios from "axios";
import React, { useState, useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import css from "./search.module.css"
const Main = () => {
 const inputRef=useRef(null)
  const [state, setState] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(true);
console.log(state);
const focusHandler=()=>{
  inputRef.current.focus()
}
  useEffect(() => {
    if (state != "" && state.length > 1) {
      axios
        .get(`https://moviesapi.ir/api/v1/movies?q=${state}`)
        .then((resp) => {
          setSearchResult(resp.data.data);
          setLoading(false);
        });
    }
  }, [state]);

  const result = loading ? (
    <h1 style={{textAlign: "center",}}> wait </h1>
  ) : 
    searchResult.map((item, i) => {
      
      return (
        <div
          className={css.itemsInList}
          key={i}
        >
         
          <Link style={{}} to={`/movies/${item.id}`}>
            {item.title}
          </Link>
        </div>
      );
  
    })

  return (
    <>
     <div style={{ position:"absolute",right:"20%",top:"30%" ,width:"400px", display:"flex",flexDirection:"column",justifyContent:"center",overflowY:"auto"}}>
      <div style={{background:"aqua",width:"100%",display:"flex",height:"45px",alignItems:"center"}} className="search"><SearchIcon/>
      <input type="text" style={{width:"100%",height:"100%"}} onChange={(e)=>{setTimeout(()=>{setState(e.target.value)},1000)}}/></div>
     {state==""? "":<div style={{zIndex:"9999"}}>{result}</div>}
     </div>
    </>
  );
};

export default Main;
