import { getTodos } from "../lib/todoServices";

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
const TODO_ADD = 'TODO_ADD'
const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// action creator function: retorno un objeto
export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const loadTodos = (todos) => ({ type: TODOS_LOAD, payload: todos });

// vamos a crear un nuevo action creator para traer los todos del servidor
// con thunk voy a retornar una function. Luego lo aplico a un action creator 'loadTodos'
// quien llama a fetchTodos es TodoList en su hook componentDidMount()
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then(todos => dispatch(loadTodos(todos)))
  }
}

// export reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case TODOS_LOAD:
      return { ...state, todos: action.payload }
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
