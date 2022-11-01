import React from "react";
import Buttons from "./components/Buttons";

import DisplayNumber from "./components/DisplayNumber";

/**
 * App component -- in our case this is main component
 *
 * State are the values that can change with the functionality of the app.
 * There is a useState hook in react for simple state management.
 */
const App = () => {
  //pass initial state to useState ie 0. useState returns variable (number) and function (setNumber)
  const [number, setNumber] = React.useState(0); //initial state

  // console.log(number); //number is a state variable variable has the current state

  // REMEMBER: When the value of state variable changes, the component which uses
  // the state variable will rerender automatically.

  // setNumber(1);

  // console.log("second state", number);

  const increment = () => {
    //setNumber function return the current state
    // whatever setNumber returns, that will be the current state value
    setNumber((previous) => {
      return previous + 1;
    });
  };

  const decrement = () => {
    setNumber((previous) => {
      return previous - 1;
    });
  };



  return (
    <>
      <h1>Counter App</h1>
      <DisplayNumber number={number} />
      <Buttons
        incrementFunc={increment}
        decrementFunc={decrement}
        number={number}
      />
    </>
  );
};

export default App;
