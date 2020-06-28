import React from "react";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";

const TodoFilter = ({todos, onComplete, onDelete, onEdit, onEditExit}) => {
  return (
    <div>
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
        onEditExit={onEditExit}/>
      <TodoCount/>
    </div>
  );
}
export default TodoFilter;