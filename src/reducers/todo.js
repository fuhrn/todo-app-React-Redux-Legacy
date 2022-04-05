// llamadas a la API
import { getTodos, createTodo, updateTodo, destroyTodo } from "../lib/todoServices";
import { showMessage } from "./messages";

const initState = {
  // todos: [
  //   { id: 1, name: "create a store", isComplete: true },
  //   { id: 2, name: "Load state through the store", isComplete: true },
  //   { id: 3, name: "Handle state changes with redux", isComplete: false },
  // ],
  todos: [],
  currentTodo: ''
};

// pasamos los type actions a constants para evitar problemas de tipeo,
// pues contaremos con la ayuda del IDE para saber si estoy tipeando bien
// y si lo escribo mal, en vez de no funcionar, la app failed to compile
export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_REMOVE = 'TODO_REMOVE'


// action creator functions --> retorno un objeto
export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const loadTodos = (todos) => ({ type: TODOS_LOAD, payload: todos });
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo });
export const replaceTodo = (todo) => ({ type: TODO_REPLACE, payload: todo });
export const removeTodo = (id) => ({ type: TODO_REMOVE, payload: id });

// vamos a crear un nuevos ACTION CREATORS que primero trabajan con la API y luego modifica el state
// con thunk voy a retornar una function. Luego lo aplico a un action creator 'loadTodos'
// quien llama a fetchTodos es TodoList en su hook componentDidMount()
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos...'))
    // primero llama a la API luego modifica el state
    getTodos().then(todos => dispatch(loadTodos(todos)))
  }
}
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage("Saving Todo"));
    // primero llama a la API luego modifica el state
    createTodo(name).then((res) => dispatch(addTodo(res)));
  };
};
export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage("Saving Todo update"));
    const { todos } = getState().todo;
    const todo = todos.find((todo) => todo.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete };
    // primero llama a la API luego modifica el state
    updateTodo(toggled).then((res) => dispatch(replaceTodo(res)));
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage("Deleting Todo"))
    destroyTodo(id).then(() => dispatch(removeTodo(id)))
  }
}




// export reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, currentTodo: '', todos: state.todos.concat(action.payload) };
    case TODOS_LOAD:
      return { ...state, todos: action.payload }
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
