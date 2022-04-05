import React from "react";
import connect from "react-redux/lib/connect/connect";
import { updateCurrent } from "../reducers/todo";

const TodoForm = (props) => {
  console.log('Rendering Form')
  const { currentTodo, updateCurrent } = props
  
  // con changeCurrent hago el dispatch de la action.type CURRENT_UPDATE con payload: value
  const handleInputChange = (event) => {
    const value = event.target.value
    updateCurrent(value)
  }

  return (
    <form>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default connect(
  (state) => ({ currentTodo: state.currentTodo }),
  {updateCurrent}
)(TodoForm)
