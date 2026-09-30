import { useState } from "react";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
   {id: 1, text: "Packa scoobysnacks", done: false},
   {id: 2, text: "Samla mysteriegänget", done: false},
   {id: 3, text: "Tanka Mystery Machine", done: false},
   {id: 4, text: "Avmaska skurk", done: false},
  ]); 
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setText("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <main className="app">
      <img src="img/scooby-dooby-to-doo-logo.png" 
      className="logo" 
      alt="Logga"/>
      <h1>Scooby Dooby To-Doo</h1>
      <form className="input-row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      <ul className="todo-list">
        {todos.map((t) => (
          <li className="todo" key={t.id}>
          <span
          className={t.done ? "completed-text" : ""}
          onClick={() => toggleDone(t.id)}
          >
          {t.text}
          </span>{" "}
          <button type="button" onClick={() => removeTodo(t.id)}>
           Ta bort
          </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
