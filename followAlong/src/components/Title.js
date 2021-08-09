import React, { useState, useReducer } from 'react';
import reducer, { initialState} from './../reducers';

import { toggleEdit, setTitleText } from './../actions';

const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');
  const [state, dispatch ] = useReducer(reducer, initialState);

  const handleChanges = e => {
    // setNewTitleText(e.target.value);
    dispatch(setTitleText(e.target.value));
  };

  const handleEditing = ()=> {
    // setEditing(!editing)
    dispatch(toggleEdit());
  }

  const handleFormInput = ()=> {
    // setTitle(newTitleText);
    // setEditing(false);
    // dispatch();
  }

  console.log(state);

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormInput}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;