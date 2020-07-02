import React, {useState} from "react";
import {KEY_TYPE, STATE} from "./constants";

const TodoItem = ({todo, onComplete, onDelete, onChangeTitle}) => {
    const {id} = todo;
    const [title, setTitle] = useState(todo.title);
    const [todoTitle, setTotoTitle] = useState(todo.title);
    const [state, setState] = useState(todo.state);
    const [complete, setComplete] = useState(todo.complete);

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
            onChangeTitle(title, id);
            setTitle(todoTitle);
            onEditExit(id);
        }
    };

    const onUpdate = event => {
        setTotoTitle(event.target.value);
    };

    const changeComplete = () => {
        setState(!complete ? STATE.COMPLETED : STATE.NONE);
        setComplete(!complete);
        onComplete(id);
    };

    return (
        <div>
            <li className={state}
                data-id={id}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                           onClick={() => changeComplete()}
                           checked={complete}
                    />
                    <label className="label"
                           onDoubleClick={() => onEdit()}>{title}</label>
                    <button className="destroy"
                            onClick={() => onDelete(id)}></button>
                </div>
                <input className="edit" value={todoTitle}
                       onChange={event => onUpdate(event)}
                       onKeyDown={event => onEditFinish(event)}/>
            </li>
        </div>
    );
}
export default TodoItem;