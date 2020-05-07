import React, { useState } from 'react';

/* funtional parent component */
function App (){
  //setting const with default text
  //parentText is used to set the input value
  const [parentText, setparentText] = useState(
    'This text is passed through callback method from parent!'
  );

  //declaring seperate onchange method
  const handleparentText = (event) => setparentText(event.target.value)

  return <ChildComponent parentText={parentText} onChangeParent={handleparentText}/>;
};
 
/* funtional child component */
//the child functional component receives a call back method as a param from parent
function ChildComponent({parentText, onChangeParent}) {
  return (
    <div>
      <h1>{parentText}</h1>
      <input
        type="text"
        value={parentText}
        onChange={onChangeParent}
      />
    </div>
  );
};
 
export default App;