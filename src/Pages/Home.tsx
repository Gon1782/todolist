import "../App.css"
import Header from "../components/header/header"
import Form from "../components/form/form"
import ToDoList from "../components/todolist/todolist"

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
