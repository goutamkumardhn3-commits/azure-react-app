
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      </section>

      <footer>
        Built with React JS + Vite
      </footer>
    </div>
  );
}

export default App;
