import React from 'react';
import './App.css';

/*functional oarent component */
function App() {
  
  //declare a const with a string
  const childText = "Text that needed to be passed to child component"

  //calling the ChildComponent where the text is passed as props
  return (
    <ChildComponent text={childText}/>
  )
}


/* child functional component called from its parent along with props */
function ChildComponent(props) {

  //props hold the text and displayed
  return (
    <div className="App">
      <h1>{props.text}</h1>
    </div>
  );
}

export default App;
