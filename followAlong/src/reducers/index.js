export const initialState = {
    title: 'Hello earthlings!',
    editing: false,
    newTitleText: ''
}

const reducer = (state, action) => {
    if(action.type === "TOGGLE_EDIT") {
        return({ ...state, editing: !state.editing });
    } else if (action.type === "SET_TITLE_TEXT") {
        return({ ...state, newTitleText: action.payload });
    }

    return state;
}

export default reducer;