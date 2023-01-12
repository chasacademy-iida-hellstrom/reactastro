import React, { useState } from 'react';

import './App.css';
import { Horoscope } from './components/Horoscope';
import { SelectSign } from './components/SelectSign';
import { SelectTimeframe } from './components/SelectTimeframe';



function App() {

const [selectedSign, setSelectedSign] = useState (null);
const [selectedTimeframe, setSelectedTimeframe] = useState (null);

const restart = () => {
  setSelectedSign(null);
  setSelectedTimeframe(null);
}

return (
    <div className="App">
      <h1>Horoscope for you!</h1>
      
      {!selectedSign && (<SelectSign onSignSelected={setSelectedSign} />)}
      {selectedSign && !selectedTimeframe && (<SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />)}
      
      {selectedSign && selectedTimeframe && <Horoscope sign={selectedSign}
      timeframe={selectedTimeframe} />}
      <button className="restart" onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
