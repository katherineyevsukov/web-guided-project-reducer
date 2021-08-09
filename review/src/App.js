import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";

let currentState = initialState;

const addAction = (input) => {
  return ({type:"ADD", payload:input})
}

const subtractAction = (input) => {
  return ({type:"SUBTRACT", payload:input})
}

const addToMemoryAction = (input) => {
  return ({type:"ADD_TO_MEMORY", payload:input})
}


const clearAction = () => {
  return ({type:"CLEAR"})
}


console.log("currentState: ", currentState);
currentState = reducer(currentState, addAction(5));
console.log("currentState: ", currentState);

currentState = reducer(currentState, addAction(500000));
console.log("currentState: ", currentState);

currentState = reducer(currentState, subtractAction(234));
console.log("currentState: ", currentState);

currentState = reducer(currentState, addToMemoryAction());
console.log("currentState: ", currentState);

currentState = reducer(currentState, clearAction());
console.log("currentState: ", currentState);

export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
