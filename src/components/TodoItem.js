import React from "react";
import { PropTypes } from "prop-types";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;
  // style
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none",
  };

  const deleteBunttonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //   return
  return (
    <p style={todoItemStyle}>
      <input
        type="checkbox"
        onChange={markComplete.bind(this, todo.id)}
        checked={todo.completed}
      />
      {todo.title}
      <button
        onClick={deleteTodo.bind(this, todo.id)}
        style={deleteBunttonStyle}
      >
        Delete
      </button>
    </p>
  );
};

/**
 * sd: {markComplete.bind(this, todo.id)} de xuly loi loop vo tan;
 */
// PropTypes : debug de hon; khai bao props
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  deleteTodoFunc: PropTypes.func.isRequired,
};

export default TodoItem;
