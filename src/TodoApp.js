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
        todo => (todo.id === id) ?
          {...todo, state: !todo.complete ? "completed" : "", complete: !todo.complete} : todo
      )
    )
  };

return (
  <section className="todoapp">
    <div>
      <h1>TODOS</h1>
      <TodoInput onAdd={onAdd}/>
      <TodoList todos={todos} onComplete={onComplete}/>
      <TodoCount/>
    </div>
  </section>
);
}
export default TodoApp;