import React, { useContext } from "react";
import "./todos.css";
import { ListGroup, ListGroupItem } from "reactstrap";

import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";

import { REMOVE_TODO } from "../context/actions.type";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos);
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => {
        return (
          <div className="todo_container">
            <ListGroupItem key={todo.id}>
              {todo.todoString}{" "}
              <span
                style={{ float: "right" }}
                onClick={() => {
                  dispatch({ type: REMOVE_TODO, payload: todo.id });
                }}
              >
                <FaCheckDouble />
              </span>
            </ListGroupItem>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default Todos;
