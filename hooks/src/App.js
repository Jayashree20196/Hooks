import React, {useState} from 'react';
import './App.css';

/*functional parent component */
function App() {
  
  //calling the ChildComponent
  return (
    <ChildComponent/>
  )
}


/* child functional component called from its parent along with props */
function ChildComponent() {

  //using useState storing the value in const
  const [useStateText, useStateSetting] = useState(
    "This text is displayed using useState"
  )

  //text is displayed from useState
  return (
    <div className="App">
      <h1>{useStateText}</h1>
    </div>
  );
}

export default App;
