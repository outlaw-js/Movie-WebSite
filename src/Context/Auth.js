import React,{createContext} from 'react';
export const tokenLogin= {
    haveToken:"",
    
}
const context = createContext(tokenLogin);
export default context;
