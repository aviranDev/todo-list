import React from "react";
import EditTodo from "./EditTodo";
import Display from "./Display";

const Todo = (props) => {
  const handleCheckbox = () => {
    props.toggleComplete(props.todo.id);
  };

  const handleRemoveClick = () => {
    props.removeTodo(props.todo.id);
  };

  const handleEdit = () => {
    props.updateTodo(props.todo.id);
  };

  return (
    <div>
      {props.todo.id === props.editTodo ? (
        <EditTodo
          todo={props.todo}
          editingHolder={props.editingHolder}
          submitEdit={props.submitEdit}
        />
      ) : (
        <Display
          completed={props.todo.completed}
          checked={props.todo.completed}
          handleCheckbox={handleCheckbox}
          todoTask={props.todo.task}
          handleRemoveClick={handleRemoveClick}
          handleEdit={handleEdit}
        />
      )}
    </div>
  )
}

export default Todo;