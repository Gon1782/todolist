import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { changeList } from "../../redux/modules/todolist";
import { Link } from "react-router-dom";
import { StBtn } from "../../style/styled-components";
import Modal from "../modal/modal";
import { showModal } from "../../redux/modules/modal";

const ToDoList = ({ isActive }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todolists.lists);
  const modal = useSelector((state) => state.modal);

  const onChange = (id) => {
    dispatch(changeList(id));
  };

  const showModalHandler = (id) => {
    dispatch(showModal(id));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">{isActive === true ? "해야 할 일" : "완료한 일"}</h2>
      <div className="list-wrap">
        {lists
          .filter((list) => list.isDone === !isActive)
          .map((list) => {
            return (
              <div className="list-box" key={list.id}>
                <div className="list-header">
                  <Link to={`/${list.id}`}>이동하기</Link>
                  <div>ID: {list.id}</div>
                </div>
                <div>
                  <h2>{list.title}</h2>
                  <span>{list.desc}</span>
                </div>
                <div className="btns">
                  <StBtn background="red" color="white" onClick={() => showModalHandler(list.id)}>
                    삭제하기
                  </StBtn>
                  <StBtn background={list.isDone ? "gray" : "green"} color="white" onClick={() => onChange(list.id)}>
                    {list.isDone ? "취소" : "완료"}
                  </StBtn>
                </div>
              </div>
            );
          })}
      </div>
      {modal.show && <Modal />}
    </div>
  );
};

export default ToDoList;
