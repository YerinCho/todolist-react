import React, {useState} from "react";
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
    },
    {
      id: 2,
      title: "음...",
      complete: false,
      state: "",
    }
  ]);

  const onAdd = item => {
    const newTodoItem = item;
    // this.todoItems.push(newTodoItem);
    // this.setState(this.todoItems, FILTER_TYPE.ALL);
  }

  return (
    <section className="todoapp">
      <div>
        <h1>TODOS</h1>
        <TodoInput onAdd={onAdd}/>
        <TodoList todos={todos}/>
        <TodoCount/>
      </div>
    </section>
  );
}
export default TodoApp;