import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Button>First button</Button>
        <Alert variant="succes">This is a button</Alert>
      </header>
    </div>
  );
}

export default App;
