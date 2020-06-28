import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onComplete, onDelete, onEdit, onEditExit}) => {
  return (
    <div className="main">
      <input className="toggle-all" type="checkbox"/>
      <ul id="todo-list" className="todo-list">
        {todos.map(todo => (
          <TodoItem todo={todo}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onEditExit={onEditExit}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;