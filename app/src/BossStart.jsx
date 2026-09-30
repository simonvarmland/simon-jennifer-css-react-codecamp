import { useState } from "react";
import "./BossStart.css"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Städa koden", done: false },
    { id: 2, text: "Visa klar tydligt", done: true },
    { id: 3, text: "Importera CSS", done: false },
  ]);

  function toggleDone(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <main>
      <div className="header">Trasig ToDo</div>
      <ul className="list">
        {todos.map((t) => (
          <li className="todo"
            key={t.id}
            >
            <span
              className={t.done ? "completed-text" : ""}
              onClick={() => toggleDone(t.id)}
              >
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
