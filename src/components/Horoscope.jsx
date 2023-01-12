import React, { useState, useEffect } from 'react';
import { getHoroscope } from '../services/api';


export const Horoscope = ({ sign, timeframe }) => {
  
    const [horoscope, setHoroscope] = useState([]);
   
    useEffect(() =>{
     getHoroscope(sign, timeframe).then(setHoroscope);
     }, [sign, timeframe]);
 
 
 
 
    return <div className="horoscope">
        <h3>{timeframe} your horoscope for {sign} is:</h3>
       <p>{horoscope}</p>
       </div>

}