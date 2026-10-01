import { useState } from "react";
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app">
      <img src="img/scooby-dooby-to-doo-logo.png" 
      className="logo" 
      alt="Logga"/>
      <section className="todo-card">
      <form className="input-row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className={todo.done ? "todo todo-completed" : "todo"}
          key={todo.id}>
          <span
          className="todo-text"
          onClick={() => toggleDone(todo.id)}
          >
                  
          {todo.text}
        
          </span>{" "}
          <button
  className="delete-button"
  type="button"
  onClick={() => removeTodo(todo.id)}
  aria-label="Ta bort"
>
  <FontAwesomeIcon icon={faTrashCan} />
</button>
          </li>
        ))}
      </ul>
      </section>
    </main>
  );
}

export default App;
