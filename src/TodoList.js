import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({filteredTodos, onComplete, onDelete, onEdit, onEditExit}) => {

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {filteredTodos.map(todo =>
                    <TodoItem todo={todo}
                              key={todo.id}
                              onComplete={onComplete}
                              onDelete={onDelete}
                              onEdit={onEdit}
                              onEditExit={onEditExit}
                    />)}
            </ul>
        </div>
    );
}
export default TodoList;