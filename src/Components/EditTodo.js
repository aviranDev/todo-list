import React from "react";
import CustomInput from "../Custom/CustomInput";
import CustomButton from "../Custom/CustomButton";
import { TodoItem, Form } from "../styles/style";
import { IoIosSave } from "react-icons/io";

const EditTodo = (props) => {

  const handleEdit = (e) => {
    props.editingHolder(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitEdit(props.todo.id)
  }

  return (
    <TodoItem>
      <Form onSubmit={handleSubmit} >
        <CustomInput
          type="text"
          name="task"
          onChange={handleEdit}
          defaultValue={props.todo.task}
        />
        <CustomButton
          background="#0A5E00"
          hoverBackground="#0F9000"
          margin="2px"
          type="submit"
        >
          <IoIosSave fontSize="30px" />
        </CustomButton>
      </Form>
    </TodoItem>
  );
};

export default EditTodo;