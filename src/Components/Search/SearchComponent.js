import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Main = () => {
 
  const [state, setState] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(true);
  const searchHandler = (e) => {};
  const searchDiv = "";
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
    <h1
      style={{
        textAlign: "center",
      }}
    >
      wait
    </h1>
  ) : (
    searchResult.map((item, i) => {
      return (
        <div
          style={{
            width: "100%",
            background: "white",
            border: "1px dotted black  ",
            display:"flex",
             justifyContent:"center",
            alignItems:"center",
            height: "50px",
          }}
          key={i}
        >
          <a></a>
          <Link style={{}} to={`/movies/${item.id}`}>
            {item.title}
          </Link>
        </div>
      );
    })
  );

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "30px",
            zIndex: "9999",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "2px solid white",
            }}
          >
            <svg
              fill="white"
              className="svg-icon"
              viewBox="0 0 20 20"
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg> 
            <input 
              placeholder="enter value you want search"
              onChange={(e) => {
                setTimeout(() => {
                  setState(e.target.value.trim());
                }, 1000);
              }}
              style={{outline:"none",
                 color: "white",
                width: "82%",
                marginTop: "",
                background: "transparent",
                border: "none",
                textAlign: "center",
              }}
            />
          </div>
          <div
            style={{
              overflowY: "scroll",
              
              display: state == "" ? "none" : "block",
            }}
          >
            {state !== "" ? result : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
