import React from "react";
import "../App.css"
import Header from "../component/header/header"
import Form from "../component/form/form"
import ToDoList from "../component/todolist/todolist"

const Home = () => {
  return (
    <div className="layout">
      <Header />
      <Form />
      <ToDoList isActive={true} />
      <ToDoList isActive={false} />
    </div>
  );
};

export default Home;
