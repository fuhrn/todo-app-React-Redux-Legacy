import { createStore, applyMiddleware } from "redux";
// thunk es un middleware
import thunk from 'redux-thunk'
import reducer from './reducers/todo'

//export store
// con thunk puedo empezar a dispatch asyncronous actions
export default createStore(
  reducer,
  applyMiddleware(thunk)
);