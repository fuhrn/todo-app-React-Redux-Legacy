import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
// import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";
import Footer from "./components/Footer";

// import { bindActionCreators } from "redux";
// import { updateCurrent } from "./reducers/todo";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Todo App with Redux - Legacy</p>
        </header>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm
            // ya no necesito mas pasar por props currentTodo -> pues ese componente ya esta conectado al store
            // currentTodo={this.props.currentTodo}
            // tampoco necesito pasar las action functions, pues van via connect en el componente directamente
            // changeCurrent={this.props.updateCurrent}
            />
            {/* como hago el connect directamente en el component, saco el props */}
            {/* <TodoList todos={this.props.todos} /> */}
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

//export default App;

// en nuestro caso voy a usar todo el state, pero si no puedo hacer (state) => state.todos, por ejemplo
// sigo recibiendo via props todo como lo venia haciendo antes: state y acciones
// con connect hago que el store (state y dispatch actions functions ) se pueda usar en el componente App
// const mapStateToProps = (state) => state

// se puede usar un mapDispatchToProps shorthand syntax
// const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch);
// const mapDispatchToProps = { updateCurrent };
// export default connect(mapStateToProps, mapDispatchToProps)(App)

// con sucesivos cambios, movi la conexion a cada componente (para evitar renderizaciones innecesarias)
// asi que solo exporto App
export default App

