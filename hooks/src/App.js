import React, { useState } from 'react';

/* funtional parent component */
function App (){
  return <ChildComponent />;
};
 
/* funtional child component */
function ChildComponent() {

  //setting const with default text
  //childText is used to set the input value
  const [childText, setchildText] = useState(
    'This text is updated from input!'
  );
 
  return (
    <div>
      <h1>{childText}</h1>
      <input
        type="text"
        value={childText}
        onChange={event => setchildText(event.target.value)}
      />
    </div>
  );
};
 
export default App;