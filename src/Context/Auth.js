import React,{createContext} from 'react';
export const tokenLogin= {
    haveToken:"",
    dataCartBasket:[],
    deleteFromCart:()=>{}
    
}
const context = createContext(tokenLogin);
export default context;
