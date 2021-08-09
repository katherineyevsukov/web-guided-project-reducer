export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const SET_TITLE_TEXT = "SET_TITLE_TEXT";

export const toggleEdit = ()=> {
    return({type:TOGGLE_EDIT})
}

export const setTitleText = ()=> {
    return({type:SET_TITLE_TEXT})
}