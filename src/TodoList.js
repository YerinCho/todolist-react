import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({filteredTodos, onComplete, onDelete, onChangeTitle}) => {

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {filteredTodos.map(todo =>
                    <TodoItem todo={todo}
                              key={todo.id}
                              onComplete={onComplete}
                              onDelete={onDelete}
                              onChangeTitle={onChangeTitle}
                    />)}
            </ul>
        </div>
    );
}
export default TodoList;