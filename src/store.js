import { createStore } from "redux";
import reducer from './reducers/todo'

//export store
export default createStore(reducer);