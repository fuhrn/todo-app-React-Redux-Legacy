import React from "react";
import ReactDOM from "react-dom";
// Provider component nos permite get the store and subscribe to state changes
import {Provider} from 'react-redux'
import "./index.css";
import App from "./App";
import store from "./store";


// const state = {
//   todos: [
//     { id: 1, name: "Render static UI", isComplete: true },
//     { id: 2, name: "Create initial state", isComplete: true },
//     { id: 3, name: "Render based on state", isComplete: false },
//   ]
// };


//const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))  ---> reemplazado por:


// const render = () => {     ---> no necesito mas el render()
// const state = store.getState();   ---> <Provider> se encarga de que App tenga acceso al store
ReactDOM.render(
  <Provider store={store}>
    <App
      // todos={state.todos}    ---> NO necesito MAS pasar por props al state
      //currentTodo={state.currentTodo}   ---> NO necesito MAS pasar por props al state

      // no necesito mas pasar las acciones via Props
      // changeCurrent={actions.updateCurrent}
    /> 
  </Provider>,
    document.getElementById("root")
);
// };

// renderiza App con los todos que estan en el state al momento de cargar por primera vez la app
// <Provider> se encargara ahora del renderizado ante cambios en el store
//render()

// cualquier modificacion en el state --> genera un nuevo renderizado de la app
// <Provider> se encarga del subscription a cambios en el store
//store.subscribe(render)

// ejemplo
// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: 'New Todo', isComplete: false}})
// }, 1000)