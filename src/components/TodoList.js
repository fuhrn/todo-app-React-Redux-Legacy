import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../reducers/todo";

const TodoItem = ({name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
)

// vamos a cambiar nuestro TodoList component a una class component para poder usar el hook componentDidMount()
// con fetchTodos que traigo del reducer
class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map((todo) => (
            // que piola como usa aqui {...todo} ---> automaticamente se generan los props para TodoItem...
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

// hago el connect sin definir primer un "mapStateToProps" --> lo defino directamente como 1er argumento de connect
// aqui no necesito action functions, por eso no pongo nada como 2do argumento
export default connect(
  (state) => ({ todos: state.todos }),
  {fetchTodos}
)(TodoList)