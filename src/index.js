import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./styles/output.css";
import "@reach/dialog/styles.css";
import "./font/font.css"
import Cart from "./Components/Cart/Cart"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import context from "./Context/Auth";
import {tokenLogin} from './Context/Auth'
import 'react-lazy-load-image-component/src/effects/blur.css';
const App = React.lazy(() => import("./App"));
const Movies = React.lazy(() => import("./Components/Movies/Movies"));
const Movie = React.lazy(() => import("./Components/Movies/Movie"));
ReactDOM.render(
<context.Provider value={{tokenLogin} }>

    <BrowserRouter>
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
</context.Provider>
  ,
  document.getElementById("root")
);
