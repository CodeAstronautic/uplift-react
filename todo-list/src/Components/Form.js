import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Form = ({ setInputText, inputText, setTodos, todos }) => {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandle} type="text" />
      <button type="submit" onClick={submitTodo}>
        <AddBoxIcon />
      </button>
      <div className="select">
        <select name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
