import React from "react";
import TodoItem from "./TodoItem";

const TodoInput = ({onAdd}) => {

  const onKeyPress = (event) => {
    if (event && event.key === 'Enter') {
      onAdd(event.target.value);
    }
  }

  return (
    <div>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        onKeyPress={onKeyPress}
        autoFocus
      />
    </div>
  );
}
export default TodoInput;