import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/actions.type";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("please enter  a todo");
    } else {
      const todo = {
        todoString,
        id: v4(),
      };

      dispatch({
        type: ADD_TODO,
        payload: todo,
      });
      setTodoString("");
    }
  };
  return (
    <Form onSubmit={handlesubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />

          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
