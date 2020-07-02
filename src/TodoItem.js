import React, {useState} from "react";
import {KEY_TYPE, STATE} from "./constants";

const TodoItem = ({todo, onComplete, onDelete}) => {
    const {id, complete} = todo;
    const [title, setTitle] = useState(todo.title);
    const [todoTitle, setTotoTitle] = useState(todo.title);
    const [state, setState] = useState(todo.state);

    const onEdit = () => {
        setState(STATE.EDIT)
    };

    const onEditExit = () => {
        setState(todo.complete ? STATE.COMPLETED : STATE.NONE);
    };

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
    };

    return (
        <div>
            <li className={state}
                data-id={id}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                           onClick={() => onComplete(id)}
                           checked={complete}
                    />
                    <label className="label"
                           onDoubleClick={() => onEdit()}>{title}</label>
                    <button className="destroy"
                            onClick={() => onDelete()}></button>
                </div>
                <input className="edit" value={todoTitle}
                       onChange={event => onUpdate(event)}
                       onKeyDown={event => onEditFinish(event)}/>
            </li>
        </div>
    );
}
export default TodoItem;