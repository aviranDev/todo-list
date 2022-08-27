import React from "react";
import Todo from "./Todo";


const Todolist = (props) => (
  <div>
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        removeTodo={props.removeTodo}
        toggleComplete={props.toggleComplete}
        updateTodo={props.updateTodo}
        editTodo={props.editTodo}
        addTodo={props.addTodo}
        editingHolder={props.editingHolder}
        submitEdit={props.submitEdit}
      />
    ))}
  </div>
)



export default Todolist