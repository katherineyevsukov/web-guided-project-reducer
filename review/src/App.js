import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";

import { addAction, subtractAction, clearAction, addToMemoryAction } from './actions/calcAction';
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
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleAddClick = () =>{
    dispatch(addAction(5));
  }

  const handleSubtractClick = () => {
    dispatch(subtractAction(2));
  }

  const handleClearClick = () => {
    dispatch(clearAction());
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button onClick={handleAddClick}type="button" className="btn">
        +5
      </button>
      <button onClick={handleSubtractClick}type="button" className="btn">
        -2
      </button>
      <button onClick={handleClearClick} type="button" className="btn">
        CE
      </button>
    </div>
  );
}
