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
import {CartProvider} from "./Context/Context"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { createTheme, ThemeProvider } from "@mui/material";
const App = React.lazy(() => import("./App"));
const Movies = React.lazy(() => import("./Components/Movies/Movies"));
const Movie = React.lazy(() => import("./Components/Movies/Movie"));
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ccc:660,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
ReactDOM.render(

    <BrowserRouter>
    <Suspense fallback={<p> Loading...</p>}>
<CartProvider>
<ThemeProvider theme={theme}>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
</ThemeProvider>
</CartProvider>
      </Suspense>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
