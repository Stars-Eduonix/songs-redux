import { createStore, combineReducers } from "redux"; 
import songReducer from "./reducers/songReducer";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
    data: dataReducer, 
    selectedSong: songReducer
})

const store = createStore(rootReducer);

export default store;