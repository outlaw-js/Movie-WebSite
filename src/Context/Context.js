import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext({});
export const CartProvider = props => {
  const [cartItems, SetCartItems] = useState([]);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const addToCart = product => {
    toast.success(`محصول ${product.title} با موفقیت اضافه شد `);
    SetCartItems(current => {
      return [...current, product];
    });
  };
  const deleteFromCart = id => {
    const filteredProduct = cartItems.filter(t => t.id !== id);
    SetCartItems(filteredProduct);
    toast.warning("با موفقیت حذف شد");
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        SetCartItems,
        addToCart,
        deleteFromCart,
        movies,
        setMovies,
        pageNo,
        setPageNo,
        isLoading,
        setLoading
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
