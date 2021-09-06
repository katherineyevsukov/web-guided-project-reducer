
import { TOGGLE_EDIT, SET_TITLE_TEXT, SAVE_INPUT} from './../actions';

export const initialState = {
    title: 'Hello earthlings!',
    editing: false,
    newTitleText: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case(TOGGLE_EDIT):
            return({ ...state, editing: !state.editing });
        case(SET_TITLE_TEXT):
            return({ ...state, newTitleText: action.payload });
        case(SAVE_INPUT):
            return({
                ...state,
                editing:false,
                title: state.newTitleText
            });
    }

    // if(action.type === TOGGLE_EDIT) {
    //     return({ ...state, editing: !state.editing });
    // } else if (action.type === SET_TITLE_TEXT) {
    //     return({ ...state, newTitleText: action.payload });
    // } else if (action.type === SAVE_INPUT) {
    //     return({
    //         ...state,
    //         editing:false,
    //         title: state.newTitleText
    //     });
    // }

    return state;
}

export default reducer;