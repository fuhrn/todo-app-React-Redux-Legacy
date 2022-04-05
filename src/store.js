import { createStore, applyMiddleware } from "redux";
// import { composeWithDevtools } from 'redux-devtools-extension'
// thunk es un middleware
import thunk from 'redux-thunk'
import reducer from './reducers/todo'

//export store
// con thunk puedo empezar a dispatch asyncronous actions
export default createStore(
  reducer,
  // imposible hacerlo funcionar con composeWithDevtools(applyMiddleware(thunk)). Asi si funciona: 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);