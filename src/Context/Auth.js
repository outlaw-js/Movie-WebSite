import React,{createContext} from 'react';
export const tokenLogin= {
    haveToken:"",
    dataCartBasket:[]
    
}
const context = createContext(tokenLogin);
export default context;
