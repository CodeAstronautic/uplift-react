import React from "react";
import Todo from "Components/Todo/Todo";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div>
      <div className="todo__container">
        <ul className="todo__list">
          {todos.map((todo) => (
            <Todo key={todo.id} text={todo.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
