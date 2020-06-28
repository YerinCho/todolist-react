import React, {useState} from "react";
import {KEY_TYPE} from "./constants";

const TodoItem = ({todo, onComplete, onDelete, onEdit, onEditExit}) => {
  const {id, state, complete} = todo;
  const [title, setTitle] = useState(todo.title);
  const [todoTitle, setTotoTitle] = useState(todo.title);

  const onEditFinish = (event) => {
      if (event.key === KEY_TYPE.ESC) {
        setTotoTitle(title);
        onEditExit(id);

      } else if (event.key === KEY_TYPE.ENTER) {
        setTitle(todoTitle);
        onEditExit(id);
      }
  };

  const onUpdate = event => {
    setTotoTitle(event.target.value);
  }

  return (
    <li className={state}
        data-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox"
               onClick={() => onComplete(id)}
               data-complete={complete}/>
        <label className="label"
               onDoubleClick={() => onEdit(id)}>{title}</label>
        <button className="destroy"
                onClick={() => onDelete(id)}></button>
      </div>
      <input className="edit" value={todoTitle}
             onChange={event => onUpdate(event)}
             onKeyDown={event => onEditFinish(event)}/>
    </li>
  );
}
export default TodoItem;