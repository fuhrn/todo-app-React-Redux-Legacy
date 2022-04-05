import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from "../reducers/todo";

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
  <li>
    <span className="delete-item">
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    />{" "}
    {name}
  </li>
);

// vamos a cambiar nuestro TodoList component a una class component para poder usar el hook componentDidMount()
// con fetchTodos que traigo del reducer
class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map((todo) => (
            // que piola como usa aqui {...todo} ---> automaticamente se generan los props para TodoItem...
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// hago el connect sin definir primer un "mapStateToProps" --> lo defino directamente como 1er argumento de connect
// aqui no necesito action functions, por eso no pongo nada como 2do argumento
export default connect((state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }), {
  fetchTodos,
  toggleTodo,
  deleteTodo,
})(TodoList);
