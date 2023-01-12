import React from 'react';


export const SelectTimeframe = ( {onTimeframeSelected}) => {
return (
    <>
    <h3>Select a timeframe here:</h3>
  
  <div className="grid">
  {['yesterday', 'today', 'tomorrow'].map(
    (timeframes) => (
     
     <button 
     className="timeframe"
     key={timeframes} 
     onClick={() => onTimeframeSelected(timeframes)}
     >
     {timeframes}</button>


  ))}
</div>
</>
);
}