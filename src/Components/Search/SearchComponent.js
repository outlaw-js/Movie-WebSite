import axios from "axios";
import React, { useState, useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import css from "./search.module.css"
import {container,inputSearch,search,zindexMax} from "./searchCss"
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
         
          <Link style={{width:"100%",height:"100%"}} to={`/movies/${item.id}`}>
            {item.title}
          </Link>
        </div>
      );
  
    })

  return (
    <>
     <div style={container}>
      <div onClick={focusHandler} style={search} className="search"><SearchIcon/>
      <input ref={inputRef} type="text" style={inputSearch}placeholder="search" onChange={(e)=>{setTimeout(()=>{setState(e.target.value)},1000)}}/></div>
     {state==""? "":<div style={zindexMax}>{result}</div>}
     </div>
    </>
  );
};

export default Main;
