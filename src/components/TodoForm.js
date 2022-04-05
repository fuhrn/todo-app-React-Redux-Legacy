import React from "react";

export default (props) => {
  const { currentTodo, changeCurrent } = props
  
  // con changeCurrent hago el dispatch de la action.type CURRENT_UPDATE con payload: value
  const handleInputChange = (event) => {
    const value = event.target.value
    changeCurrent(value)
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
