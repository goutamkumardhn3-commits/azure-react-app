
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await getItems();
      setItems(data);
    }

    fetchItems();
  }, []);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

async function getItems() {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();

  return data;
}

  return (
    <div className="container">
      <header>
        <h1>Azure React Dashboard</h1>
        <p>Welcome to my first Azure frontend application.</p>
      </header>

      <section className="dashboard">
        <div className="card">
          <h2>React Counter</h2>

          <h1>{count}</h1>

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="card">
          <h2>Technology Stack</h2>
          <p>React JS</p>
          <p>Vite</p>
          <p>JavaScript</p>
          <p>Azure Static Web Apps</p>
        </div>

        <div className="card">
          <h2>Products</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer>
        Built with React JS + Vite
      </footer>
    </div>
  );
}

export default App;
