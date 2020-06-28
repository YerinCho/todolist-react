import React from "react";

const TodoItem = ({todo, onComplete, onDelete}) => {
  const {id, title, complete, state} = todo;

  return (
    <li className={state} data-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={() => onComplete(id)} data-complete={complete}/>
        <label className="label">{title}</label>
        <button className="destroy" onClick={() => onDelete(id)}></button>
      </div>
      <input className="edit" value={title}/>
    </li>
  );
}
export default TodoItem;