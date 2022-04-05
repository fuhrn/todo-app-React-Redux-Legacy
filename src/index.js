import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import {bindActionCreators} from 'redux'
import { updateCurrent } from "./reducers/todo";

// const state = {
//   todos: [
//     { id: 1, name: "Render static UI", isComplete: true },
//     { id: 2, name: "Create initial state", isComplete: true },
//     { id: 3, name: "Render based on state", isComplete: false },
//   ]
// };


//const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))  ---> reemplazado por:
const actions = bindActionCreators({updateCurrent}, store.dispatch)

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    // <React.StrictMode>
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={actions.updateCurrent}
    />, //{...state} es el [] de todos, currentTodo, etc
    // </React.StrictMode>,
    document.getElementById("root")
  );
};

// renderiza App con los todos que estan en el state al momento de cargar por primera vez la app
render()

// cualquier modificacion en el state --> genera un nuevo renderizado de la app
store.subscribe(render)

// ejemplo
// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: 'New Todo', isComplete: false}})
// }, 1000)