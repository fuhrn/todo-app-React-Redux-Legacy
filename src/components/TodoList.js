import React from "react";
import { connect } from "react-redux";

const TodoItem = ({name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
)

const TodoList = (props) => console.log('List rendering') || (
  <div className="Todo-List">
    <ul>
      {props.todos.map((todo) => (
        // que piola como usa aqui {...todo} ---> automaticamente se generan los props para TodoItem...
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

// hago el connect sin definir primer un "mapStateToProps" --> lo defino directamente como 1er argumento de connect
// aqui no necesito action functions, por eso no pongo nada como 2do argumento
export default connect(
  (state) => ({todos: state.todos})
)(TodoList)