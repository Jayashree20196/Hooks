import React, { useState } from 'react';

/* funtional parent component */
function App (){
  //setting const with default count value as 0
  //setCount is used to set the value based on onclick method
  const [count, setCount] = useState(0);

  //add method to add the count by 1
  const handleAdd = () => setCount(counter => counter + 1);

  //subtract method to subtract the count by 1
  const handleSubtract = () => setCount(counter => counter - 1);
  return (
<div>
 <h1>{count}</h1>
 <button onClick={handleAdd}>add</button>
 <button onClick={handleSubtract}>subtract</button>
</div>
  );
};

export default App;