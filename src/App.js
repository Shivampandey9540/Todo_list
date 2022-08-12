import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import img from "./logo.svg";
import { TodoContext } from "./context/TodoContext";
import { TodoReducer } from "./context/reducer";
import TodoForm from "./conponents/TodoForm";
import Todos from "./conponents/todos";
const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid style={{ display: "flex", justifyContent: "center" }}>
        <img src={img} alt="" style={{ width: "50px" }} />
        <h1>Todo App with context api</h1>
        <div className="TodosFormTodoholder">
          <TodoForm />

          <Todos />
        </div>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
