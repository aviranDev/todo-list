import React from "react";
import { v4 as uuidv4 } from 'uuid';
import useForm from "../hooks/useForm";
import CustomButton from "../Custom/CustomButton";
import CustomInput from "../Custom/CustomInput";
import { Form } from '../styles/style'

const credentials = {
  id: '',
  task: '',
  completed: false,
}

const TodoForm = ({ addTodo }) => {
  const { state, setState, handleChange } = useForm(credentials);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.task.trim()) {
      addTodo({ ...state, id: uuidv4() })
      setState({ ...state, task: "" })
    };
  };
  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        name="task"
        value={state.task}
        onChange={handleChange}
        placeholder="Enter task here"
      />
      <CustomButton
        fontSize="40px"
        width="20%"
        left="9px"
        right="9px"
        type="submit">
        +
      </CustomButton>
    </Form>
  )
}

export default TodoForm;