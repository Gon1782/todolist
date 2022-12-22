import React from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { StBtn } from "../style/styled-components";
import { useQuery } from 'react-query';
import { getLists } from '../api/api';

const List = () => {
  const navigate = useNavigate();
  
  const param = useParams();
  const { data } = useQuery("lists", getLists, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const list = data.find((list) => list.id === Number(param.id));
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
