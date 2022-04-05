const initState = {
  todos: [
    { id: 1, name: "create a store", isComplete: true },
    { id: 2, name: "Load state through the store", isComplete: true },
    { id: 3, name: "Handle state changes with redux", isComplete: false },
  ],
  currentTodo: ''
};

// pasamos los type actions a constants para evitar problemas de tipeo,
// pues contaremos con la ayuda del IDE para saber si estoy tipeando bien
// y si lo escribo mal, en vez de no funcionar, la app failed to compile
const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// action creator function
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})

// export reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
