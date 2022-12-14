import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../App.css";
import { addList } from "../../redux/modules/todolist";
import { StBtn } from '../../style/styled-components';

const Form = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState({
    id: 0,
    title: "",
    desc: "",
    isDone: false,
  });
  const [count, setCount] = useState(3)

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (list.title.trim() === "" || list.desc.trim() === "") {
      alert("제목과 내용을 입력해주세요.")
      return;
    }
    dispatch(addList({ ...list, id: count }));
    setCount(count+1);
    setList({
      id: 0,
      title: "",
      desc: "",
      isDone: false,
    });
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="textArea">
        <label className="label">제목</label>
        <input type="text" name="title" className="textInput" onChange={onChangeHandler} value={list.title} />
        <label className="label">내용</label>
        <input type="text" name="desc" className="textInput" onChange={onChangeHandler} value={list.desc} />
      </div>
      <StBtn>추가하기</StBtn>
    </form>
  );
};

export default Form;
