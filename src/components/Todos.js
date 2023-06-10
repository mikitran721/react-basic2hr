import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [todosState, setTodosState] = useState([
    { id: uuidv4(), title: "viec 1", completed: false },
    { id: uuidv4(), title: "viec 2", completed: true },
    { id: uuidv4(), title: "viec 3", completed: false },
    { id: uuidv4(), title: "viec 4", completed: false },
  ]);
  // gan vc cho sate todos; - trang thai ban dau
  // trang thai thay doi khi dung setTodosState

  // const allTodos = [];
  // for (let todo of todosState) {
  //   allTodos.push(<p>{todo}</p>);
  // }

  const markComplete = (id) => {
    //lat complet cua id dc chon
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    setTodosState(newTodos); //thay doi state
  };

  const deleteTodo = (id) => {
    const newTodos = todosState.filter((todo) => todo.id !== id);
    setTodosState(newTodos);
  };

  const addTodo = (title) => {
    const newTodos = [...todosState, { id: uuidv4(), title, completed: false }];
    setTodosState(newTodos);
  };

  return (
    <>
      <AddTodo addTodoFunc={addTodo} />
      {todosState.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoProps={todo}
            markCompleteFunc={markComplete}
            deleteTodoFunc={deleteTodo}
          />
        );
      })}
    </>
  );
};

export default Todos;
