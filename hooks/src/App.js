import React from 'react';
import './App.css';

/*functional component */
function App() {
  //declare a const with a string
  const sampleText = "This is the begining of react hooks"

  //const is directly returned
  return (
    <div className="App">
      <h1>{sampleText}</h1>
    </div>
  );
}

export default App;
