import React from "react";
import "../App.css"
import Header from "../component/header/header"
import Form from "../component/form/form"
import ToDoList from "../component/todolist/todolist"

const Home = () => {
  return (
    <div>
      <div className="layout">
        <Header />
        <Form />
        <ToDoList isActive={true} />
        <ToDoList isActive={false} />
      </div>
    </div>
  );
};

export default Home;
