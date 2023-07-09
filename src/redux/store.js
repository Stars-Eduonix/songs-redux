import { createStore } from "redux"; 
import songReducer from "./reducers/songReducer";


const store = createStore(songReducer);

export default store;