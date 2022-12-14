import React from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StBtn } from "../style/styled-components";

const List = () => {
  const navigate = useNavigate();
  const param = useParams();
  const lists = useSelector((state) => state.todolists.lists);
  // eslint-disable-next-line eqeqeq
  const list = lists.find((list) => list.id == param.id);
  return (
    <div className="container">
      <div className="box">
        <div>
          <div className="id_box">
            <div>ID : {list.id}</div>
            <StBtn onClick={() => navigate("/")}>이전으로</StBtn>
          </div>
          <h1>{list.title}</h1>
          <div>{list.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default List;
