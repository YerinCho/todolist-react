import React from "react";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";

const TodoApp = () => {

  return (
    <section className="todoapp">
      <div>
        <h1>TODOS</h1>
        <TodoInput />
        <TodoList />
        <TodoCount />
      </div>
    </section>
  );
}
export default TodoApp;