import { useState } from 'react';
import "./styles.css";

function App() {

  const [counter, setCounter] = useState(0);

  function increase(){
     setCounter(counter + 1);
  }

  function decrease(){
     setCounter(counter - 1);
  }

  return (
    <div className='App'>
    <button onClick = {increase} type='button'>+</button>
      <p>{counter}</p>
      <button onClick = {decrease} type='button'>-</button>
    </div>
  );
}

export default App;
