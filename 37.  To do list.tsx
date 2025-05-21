import React, { useState } from "react";
import "./styles.css";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="dark-mode">
      <input
        type="text"
        placeholder="Add todo.."
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            style={{
              textDecoration: completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleComplete(id)}
          >
            {text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(id);
              }}
              style={{ marginLeft: "10px" }}
            >
              {" "}
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
