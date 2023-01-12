import React, { useEffect, useState } from 'react';
import { getSigns } from '../services/api';



export const SelectSign = ({ onSignSelected }) => {
    const [signs, setSigns] = useState ([]);
   
    useEffect(() =>{
     
        getSigns().then(setSigns);
     }, []);
     

    return (
        <>
        <h3>Select your sign below:</h3>
      
      <div className="grid">
      {signs.map((sign) => (
         
         <button 
         className="sign" 
         key={sign} 
         onClick={() => onSignSelected(sign)}
         >
         {sign}</button>


      ))}
    </div>
    </>
    )


};