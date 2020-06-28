import React from "react";
import {FILTER_TYPE} from "./constants";

const TodoCount = ({onFilter, count}) => {

  return (
    <div className="count-container">
      <span className="todo-count">총 <strong>{count}</strong> 개</span>
      <ul className="filters">
        <li>
          <a className="all selected" href="#/" onClick={() => onFilter(FILTER_TYPE.ALL)}>전체보기</a>
        </li>
        <li>
          <a className="active" href="#/active" onClick={() => onFilter(FILTER_TYPE.ACTIVE)}>해야할 일</a>
        </li>
        <li>
          <a className="completed" href="#/completed" onClick={() => onFilter(FILTER_TYPE.COMPLETED)}>완료한 일</a>
        </li>
      </ul>
    </div>
  );
}

export default TodoCount;