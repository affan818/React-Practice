import { useState } from "react";
let initialVal = 0;
const App = () => {
  let [count, setCount] = useState(initialVal);
  function increement() {
    if (count !== 20) {
      setCount(count + 1);
    } else {
      count = initialVal;
    }
  }
  function decreement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      count = increement;
    }
  }

  return (
    <>
      <h1>my first counter</h1>
      <h3>counter: {count}</h3>
      <button onClick={increement}>Increement</button>
      <br />
      <button onClick={decreement}>Decreement</button>
    </>
  );
};

export default App;
