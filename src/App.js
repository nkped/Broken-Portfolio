import "./App.css";
//React
import { Link } from "react-router-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Setting up routing!</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/om">Om</Link> | <Link to="/apps">Apps</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
