export const initialState = {
    title: 'Hello earthlings!',
    editing: true,
    newTitleText: ''
}

const reducer = (state, action) => {
    if(action.type === "TOGGLE_EDIT") {
        return({ ...state, editing: !state.editing });
    }
    
    return state;
}

export default reducer;