import React from 'react';
import "./Spinner.css"
const Spinner = () => {
    return (<>
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="loader"></div>
    </div>
    </>  );
}
 
export default Spinner;