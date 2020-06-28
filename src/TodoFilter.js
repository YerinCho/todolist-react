import React, {useState} from "react";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";

const TodoFilter = ({todos, onComplete, onDelete, onEdit, onEditExit, onFilter}) => {
  return (
    <div>
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
        onEditExit={onEditExit}/>
      <TodoCount
        onFilter={onFilter}
        count={todos.length}/>
    </div>
  );
}
export default TodoFilter;