import React from "react";
import "./Todo.css";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ text }) => {
  const deleteHandle = () =>{
    
  }
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <DoneIcon />
      </button>
      <button className="delete-btn">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Todo;
