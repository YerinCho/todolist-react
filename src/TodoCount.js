import React, {useState} from "react";
import {FILTER_TYPE} from "./constants";

const TodoCount = ({count}) => {

  return (
    <div>
      <span className="todo-count">총 <strong>{count}</strong> 개</span>
    </div>
  );
}

export default TodoCount;