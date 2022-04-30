//React
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
//Styles
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <NavLink to="/">Home</NavLink> | <NavLink to="/om">Om</NavLink> |{" "}
          <NavLink to="/apps">Apps</NavLink> |{" "}
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
