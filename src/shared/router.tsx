import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import List from "../Pages/List";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
