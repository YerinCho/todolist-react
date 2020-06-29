import React, {useRef, useState} from "react";
import TodoInput from "./TodoInput.js";
import TodoFilter from "./TodoFilter";
import {FILTER_TYPE, STATE} from "./constants";

const TodoApp = () => {

  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState(allTodos);
  const [filter, setFilter] = useState(FILTER_TYPE.ALL);

  const nextId = useRef(1);

  const onAdd = async title => {
    const newTodoItem = {
      id: nextId.current,
      title: title,
      complete: false,
      state: STATE.NONE,
    };
    setAllTodos(allTodos.concat(newTodoItem));
    if(filter === FILTER_TYPE.ACTIVE || FILTER_TYPE.ALL) {
      setTodos(todos.concat(newTodoItem));
    }
    nextId.current += 1;
  }

  const onComplete = id => {
    setAllTodos(
      allTodos.map(
        todo => todo.id === id ?
          {...todo, state: !todo.complete ? STATE.COMPLETED : STATE.NONE, complete: !todo.complete} : todo
      )
    )
    setTodos(
      todos.map(
        todo => todo.id === id ?
          {...todo, state: !todo.complete ? STATE.COMPLETED : STATE.NONE, complete: !todo.complete} : todo
      )
    )
  };

  const onDelete =  id => {
    const isDelete = window.confirm("정말로 지울건가요?");
    if (isDelete) {
      setAllTodos(
        allTodos.filter(todo => todo.id !== id)
      )
    }
    onFilter(filter);
  };

  const onEdit =  id => {
    setAllTodos(
      allTodos.map(
        todo => todo.id === id ? {...todo, state: STATE.EDIT} : todo
      )
    )
    onFilter(filter);
  };

  const onEditExit =  id => {
    setAllTodos(
      allTodos.map(
        todo => todo.id === id ? {...todo, state: todo.complete ? STATE.COMPLETED : STATE.NONE} : todo
      )
    )
    onFilter(filter);
  };

  const onFilter = filterType => {
    if (filterType === FILTER_TYPE.COMPLETED) {
       setTodos(
        allTodos.filter(todo => todo.complete)
      )
    } else if (filterType === FILTER_TYPE.ACTIVE) {
       setTodos(
        allTodos.filter(todo => !todo.complete)
      )
    } else if (filterType === FILTER_TYPE.ALL) {
       setTodos(allTodos);
    }
    setFilter(filterType);
    console.log("dhodkseho")
  }

  return (
    <section className="todoapp">
      <div>
        <h1>TODOS</h1>
        <TodoInput onAdd={onAdd}/>
        <TodoFilter
          todos={todos}
          onFilter={onFilter}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          onEditExit={onEditExit}/>
      </div>
    </section>
  );
}
export default TodoApp;