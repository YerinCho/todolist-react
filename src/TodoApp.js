import React, {useRef, useState} from "react";
import TodoInput from "./TodoInput.js";
import TodoFilter from "./TodoFilter";
import {FILTER_TYPE, STATE} from "./constants";
import TodoList from "./TodoList";
import TodoCount from "./TodoCount";

const TodoApp = () => {

    const [allTodos, setAllTodos] = useState([]);
    const [filter, setFilter] = useState(FILTER_TYPE.ALL);

    const nextId = useRef(1);

    const onAdd = title => {
        const newTodoItem = {
            id: nextId.current,
            title: title,
            complete: false,
            state: STATE.NONE,
        };
        setAllTodos(allTodos.concat(newTodoItem));
        nextId.current += 1;
    };

    const onChangeTitle = (title, id) => {
        setAllTodos(
            allTodos.map(
                todo => todo.id === id ?
                    {...todo, title: title} : todo
            )
        )
    };

    const onComplete = id => {
        setAllTodos(
            allTodos.map(
                todo => todo.id === id ?
                    {...todo, state: !todo.complete ? STATE.COMPLETED : STATE.NONE, complete: !todo.complete} : todo
            )
        )
    };
    const onDelete = id => {
        const isDelete = window.confirm("정말로 지울건가요?");
        if (isDelete) {
            setAllTodos(
                allTodos.filter(todo => todo.id !== id)
            )
        }
    };

    const filterTodos = filter => {
        if (filter === FILTER_TYPE.COMPLETED) {
            return allTodos.filter(todo => todo.complete);
        } else if (filter === FILTER_TYPE.ACTIVE) {
            return allTodos.filter(todo => !todo.complete);
        } else if (filter === FILTER_TYPE.ALL) {
            return allTodos;
        }
        return allTodos;
    };

    const onFilter = filter => {
        setFilter(filter);
    };

    return (
        <section className="todoapp">
            <div>
                <h1>TODOS</h1>
                <TodoInput onAdd={onAdd}/>
                <TodoList
                    filteredTodos={filterTodos(filter)}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    onChangeTitle={onChangeTitle}
                />
            </div>
            <div className="count-container">
                <TodoCount count={filterTodos(filter).length}/>
                <TodoFilter onFilter={onFilter}/>
            </div>
        </section>
    );
};
export default TodoApp;