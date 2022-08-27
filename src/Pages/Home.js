import React, { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import Todolist from "../Components/Todolist";
import { Container, Wrapper } from "../styles/style";
import CustomTitle from "../Custom/CustomHeading";
import storage from '../utils/locaoStorage';

const Home = () => {
  const [todos, setTodos] = useState(storage.get('todo-list'));
  const [editTodo, setEditTodo] = useState(false);
  const [edittingText, setEdittingText] = useState(null);

  useEffect(() => {
    storage.set('todo-list', todos)
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleEdit = (todo) => {
    const newTodos = [...todos];
    const index = todos.find((val) => val.id === todo.id);
    newTodos[index] = todo;
    setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    )
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id) => {
    const task = todos.find((task) => task.id === id)
    setEditTodo(task.id)
  }

  const editingHolder = (value) => {
    setEdittingText(value);
  }

  const submitEdit = (id) => {
    if (!edittingText) {
      setEditTodo(null);
      return
    }
    const updateTodos = [...todos].map((task) => {
      if (task.id === id) {
        task.task = edittingText
      }
      return task
    });
    setTodos(updateTodos);
    setEdittingText(null);
    setEditTodo(null);
  }

  return (
    <Container>
      <Wrapper>
        <CustomTitle>Todo list</CustomTitle>
        <TodoForm addTodo={addTodo} />
        <Todolist
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
          editTodo={editTodo}
          addTodo={addTodo}
          handleEdit={handleEdit}
          editingHolder={editingHolder}
          submitEdit={submitEdit}
        />
      </Wrapper>
    </Container>
  )
}

export default Home;