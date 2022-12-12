import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { changeList, deleteList } from '../../redux/modules/todolist';
import { Link } from 'react-router-dom';

const ToDoList = ({ isActive }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todolists.lists);

  const onDelete = (id) => {
    dispatch(deleteList(id));
  };

  const onChange = (id) => {
    dispatch(changeList(id));
  }

  return (
    <div className="list-container">
      <h2 className="list-title">{isActive === true ? "해야 할 일" : "완료한 일"}</h2>
      <div className="list-wrap">
        {lists
          .filter((list) => list.isDone === !isActive)
          .map((list) => {
            return (
              <div className="list-box" key={list.id}>
                <Link to={`/${list.id}`}>이동하기</Link>
                <div>
                  <h2>{list.title}</h2>
                  <span>{list.desc}</span>
                </div>
                <div className="btns">
                  <button onClick={() => onDelete(list.id)}>삭제하기</button>
                  <button onClick={() => onChange(list.id)}>{list.isDone ? "취소" : "완료"}</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToDoList;
