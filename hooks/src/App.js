import React from 'react';
import './App.css';

/*functional component */
function App() {
  //calling the secondComponent
  return (
    <SecondComponent/>
  )
}


/* Second functional component called from its parent */
function SecondComponent() {

  //declare a const with a string
  const sampleText = "This is displayed in the second component"

  //const is directly returned
  return (
    <div className="App">
      <h1>{sampleText}</h1>
    </div>
  );
}

export default App;
