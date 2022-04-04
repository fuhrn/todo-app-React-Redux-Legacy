import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

// const state = {
//   todos: [
//     { id: 1, name: "Render static UI", isComplete: true },
//     { id: 2, name: "Create initial state", isComplete: true },
//     { id: 3, name: "Render based on state", isComplete: false },
//   ]
// };

const state = store.getState()

ReactDOM.render(
  // <React.StrictMode>
    <App {...state} />, //{...state} es el [] de todos
  // </React.StrictMode>,
  document.getElementById('root')
);



