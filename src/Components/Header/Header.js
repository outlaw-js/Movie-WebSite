import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import SearchComponent from "../Search/SearchComponent";
const Header = () => {
  const styleMenu = {
    color: "black ",
    fontSize: "27px",
    fontFamily: "Poppins",
    marginRight: "40px"
  };
  return (
    <div
      style={{position:"relative",
        width: "100%",
        background: "dodgerblue",
        height:"100px",
        display:"flex",
      alignItems:"center",
      }}
    >
      <Link to={`/`} style={styleMenu}>
        Home
      </Link>
      <Link to={`/login`} style={styleMenu}>
        login
      </Link>
      <Link to={`/register`} style={styleMenu}>
        register
      </Link>
      <Cart />
      <SearchComponent />
    </div>
  );
};

export default Header;
