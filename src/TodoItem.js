import React from "react";

const TodoItem = ({todo}) => {
  console.log(todo);
  const {id, title, complete, state} = todo;

  return (
    <li className={state}>
      <div className="view">
        <input className="toggle" type="checkbox"/>
          <label className="label">{title}</label>
          <button className="destroy"></button>
      </div>
      <input className="edit" value={title}/>
    </li>
  );
}
export default TodoItem;