import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";

import { addAction, subtractAction, clearAction, addToMemoryAction} from './actions/calcAction';
let currentState = initialState;


// console.log("currentState: ", currentState);
// currentState = reducer(currentState, addAction(-5));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, addAction(43));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, subtractAction(234));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, addToMemoryAction());
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, clearAction());
// console.log("currentState: ", currentState);

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
