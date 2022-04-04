import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const state = {
  todos: [
    { id: 1, name: "Render static UI", isComplete: true },
    { id: 2, name: "Create initial state", isComplete: true },
    { id: 3, name: "Render based on state", isComplete: false },
  ]
};

ReactDOM.render(
  // <React.StrictMode>
    <App todos={state.todos} />,
  // </React.StrictMode>,
  document.getElementById('root')
);



