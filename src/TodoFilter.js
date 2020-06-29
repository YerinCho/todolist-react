import React, {useState} from "react";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import {FILTER_TYPE} from "./constants";

const TodoFilter = ({onFilter}) => {

  const [selectAll, setSelectAll] = useState(true);
  const [selectActive, setSelectActive] = useState(false);
  const [selectCompleted, setSelectCompleted] = useState(false);


  const setSelect = filterType => {
    if (filterType === FILTER_TYPE.ALL) {
      setSelectAll(true);
      setSelectActive(false);
      setSelectCompleted(false);
    } else if (filterType === FILTER_TYPE.ACTIVE) {
      setSelectAll(false);
      setSelectActive(true);
      setSelectCompleted(false);
    } else if (filterType === FILTER_TYPE.COMPLETED) {
      setSelectAll(false);
      setSelectActive(false);
      setSelectCompleted(true);
    }
  };

  return (
    <div>
        <ul className="filters">
          <li>
            <a className={"all" + (selectAll ? " selected" : "")} href="#/" onClick={() => {
              onFilter(FILTER_TYPE.ALL);
              setSelect(FILTER_TYPE.ALL)
            }}>전체보기</a>
          </li>
          <li>
            <a className={"active" + (selectActive ? " selected" : "")} href="#/active" onClick={() => {
              onFilter(FILTER_TYPE.ACTIVE);
              setSelect(FILTER_TYPE.ACTIVE)
            }}>해야할 일</a>
          </li>
          <li>
            <a className={"completed" + (selectCompleted ? " selected" : "")} href="#/completed" onClick={() => {
              onFilter(FILTER_TYPE.COMPLETED);
              setSelect(FILTER_TYPE.COMPLETED)
            }}>완료한 일</a>
          </li>
        </ul>
    </div>
  );
}
export default TodoFilter;