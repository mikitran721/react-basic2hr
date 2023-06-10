import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  // state
  const [title, setTitle] = React.useState("");

  //addTodo
  const addTodo = props.addTodoFunc;
  const addTodoFormStyle = {
    display: "flex",
  };

  const addTodoInputStyle = {
    flex: "10",
    padding: "5px",
  };

  const changeTitle = (event) => {
    //event dc truye auto
    setTitle(event.target.value);
  };

  const addSingleTodo = (event) => {
    event.preventDefault(); //tranh reload
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("Vui lòng nhập todo...");
      return;
    }
  };

  return (
    <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
      <input
        required
        onChange={changeTitle}
        style={addTodoInputStyle}
        type="text"
        name="title"
        value={title}
        placeholder="Dien cong viec (todo)..."
      />
      <input type="submit" value="Them moi" className="btn" />
    </form>
  );
};

AddTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
