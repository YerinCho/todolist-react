import React, {useRef, useState} from "react";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "todoList 하기",
      complete: false,
      state: "",
    }
  ]);

  const nextId = useRef(2);

  const onAdd = title => {
    const newTodoItem = {
      id: nextId.current,
      title: title,
      complete: false,
      state: "",
    };
    setTodos(todos.concat(newTodoItem));
    nextId.current += 1;
  }

  const onComplete = id => {
    setTodos(
      todos.map(
        todo => todo.id === id ?
          {...todo, state: !todo.complete ? "completed" : "", complete: !todo.complete} : todo
      )
    )
  };

  const onDelete = id => {
    const isDelete = window.confirm("정말로 지울건가요?");
    if (isDelete) {
      setTodos(
        todos.filter(todo => todo.id !== id)
      )
    }
  };

  const onEdit = id => {
    setTodos(
      todos.map(
        todo => todo.id === id ? {...todo, state: "editing"} : todo
      )
    )
  };

  const onEditExit = id => {
    setTodos(
      todos.map(
        todo => todo.id === id ? {...todo, state: ""} : todo
      )
    )
  };


  return (
    <section className="todoapp">
      <div>
        <h1>TODOS</h1>
        <TodoInput onAdd={onAdd}/>
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          onEditExit={onEditExit}
        />
        <TodoCount/>
      </div>
    </section>
  );
}
export default TodoApp;