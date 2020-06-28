import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onComplete}) => {
  return (
    <div className="main">
      <input className="toggle-all" type="checkbox"/>
      <ul id="todo-list" className="todo-list">
        {todos.map(todo => (
          <TodoItem todo={todo}
                    key={todo.id}
                    onComplete={onComplete}
          />
        ))}
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label className="label">완료된 타이틀</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="완료된 타이틀"/>
        </li>
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label className="label">완료된 타이틀</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="완료된 타이틀"/>
        </li>
      </ul>
    </div>
  );
}
export default TodoList;