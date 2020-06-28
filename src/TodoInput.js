import React from "react";

const TodoInput = ({onAdd}) => {

  const onKeyPress = (event) => {
    const title = event.target.value;
    if (event.key === 'Enter' && title.trim() !== "") {
      onAdd(title);
      event.target.value = "";
    }
  }

  return (
    <div>
      <input
        id="new-todo-title"
        className="new-todo"
        placeholder="할일을 추가해 주세요"
        onKeyPress={onKeyPress}
        autoFocus
      />
    </div>
  );
}
export default TodoInput;