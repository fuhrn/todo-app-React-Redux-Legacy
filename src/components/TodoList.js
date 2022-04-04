import React from "react";

const TodoItem = ({name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
)

export default (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map((todo) => (
        // que piola como usa aqui {...todo} ---> automaticamente se generan los props para TodoItem...
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);