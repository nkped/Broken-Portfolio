//React
import React from "react";
import { Link, Outlet } from "react-router-dom";
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
          <Link to="/">Home</Link> | <Link to="/om">Om</Link> |{" "}
          <Link to="/apps">Apps</Link> | <Link to="/blog">Blog</Link>
        </nav>
        <Outlet />
        <h1>Setting up routing!</h1>
      </header>
    </div>
  );
}

export default App;
