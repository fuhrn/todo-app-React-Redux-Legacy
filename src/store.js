import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevtools } from 'redux-devtools-extension'
// thunk es un middleware
import thunk from 'redux-thunk'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/messages'

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

//export store
// con thunk puedo empezar a dispatch asyncronous actions
// tengo que usar combineReducers pues mi store solo acepta un reducer
export default createStore(
  reducer,
  // imposible hacerlo funcionar con composeWithDevtools(applyMiddleware(thunk)). Asi si funciona: 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);