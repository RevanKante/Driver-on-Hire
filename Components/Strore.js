import {createStore} from "redux"
import reducer from "./Reducer";

const initialState = {loggedin: false}

const mystore = createStore(reducer, initialState);

export default mystore;

