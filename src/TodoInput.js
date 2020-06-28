import React from "react";

const TodoInput = () =>{
  return (
    <div>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해주세요"
        autoFocus
      />
    </div>
  );
}
export default TodoInput;