import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// import { bindActionCreators } from "redux";
import { updateCurrent } from "./reducers/todo";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Todo App with Redux - Legacy</p>
        </header>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

//export default App;

// en nuestro caso voy a usar todo el state, pero si no puedo hacer (state) => state.todos, por ejemplo
// sigo recibiendo via props todo como lo venia haciendo antes: state y acciones
// con connect hago que el store (state y dispatch actions ) se pueda usar en el componente App
const mapStateToProps = (state) => state

// se puede usar un mapDispatchToProps shorthand syntax
// const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch);
const mapDispatchToProps = { updateCurrent };
export default connect(mapStateToProps, mapDispatchToProps)(App)

