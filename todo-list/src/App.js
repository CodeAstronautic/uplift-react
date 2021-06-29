import React, { useState } from "react";
import "./App.css";
import Form from "Components/Form";
import TodoList from "Components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
