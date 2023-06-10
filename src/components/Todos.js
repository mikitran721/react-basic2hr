import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Todos = () => {
  const [todosState, setTodosState] = useState([
    // { id: uuidv4(), title: "viec 1", completed: false },
    // { id: uuidv4(), title: "viec 2", completed: true },
    // { id: uuidv4(), title: "viec 3", completed: false },
    // { id: uuidv4(), title: "viec 4", completed: false },
  ]);
  // gan vc cho sate todos; - trang thai ban dau
  // trang thai thay doi khi dung setTodosState

  // const allTodos = [];
  // for (let todo of todosState) {
  //   allTodos.push(<p>{todo}</p>);
  // }

  // useEffect; lay 10 todos mau; can [] de useEffect sd 1 lan;

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        console.log(res.data);
        setTodosState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodos();
  }, []);

  const markComplete = (id) => {
    //lat complet cua id dc chon
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    setTodosState(newTodos); //thay doi state
  };

  // delete cu
  // const deleteTodo = (id) => {
  //   const newTodos = todosState.filter((todo) => todo.id !== id);
  //   setTodosState(newTodos);
  // };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

      const newTodos = todosState.filter((todo) => todo.id !== id);
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  // func voi array
  // const addTodo = (title) => {
  //   const newTodos = [...todosState, { id: uuidv4(), title, completed: false }];
  //   setTodosState(newTodos);
  // };

  const addTodo = async (title) => {
    try {
      let newId = Math.floor(Math.random() * 10000);
      console.log(newId);
      // jsonplaceholder da tu gan Id nen ko can truyen vo
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          id: newId, //khong nhan id nay; api tu tao idnew
          title,
          completed: false,
        }
      );
      const newTodos = [...todosState, res.data];
      setTodosState(newTodos);
    } catch (error) {
      console.error(error);
    }
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
