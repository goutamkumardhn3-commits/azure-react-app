
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <nav className="navbar">
          <h2>My Azure App</h2>

          <div className="nav-links">
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/items">Items</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/items" element={<Items />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
