import {SELECTED_SONGS} from "../actions/actionTypes"; 

const initialState = null

const songReducer = (state = initialState, action) => {
       
    switch(action.type) {
        case SELECTED_SONGS:
            return action.payload
        default:
            return state
    }

}

export default songReducer;

