import logo from "./logo.svg";
import * as React from "react";
import Skills from "./components/Skills";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container className="Container">
        <Row>
          <Col>
            <a href="/">
              <div className="Logo">
                <div className="Logo-Slug">JJ</div>
                <span>JOBS JUBS</span>
              </div>
            </a>
          </Col>
          {/* <Col>
            <Button>Teste</Button>
          </Col> */}
        </Row>
      </Container>
      <header className="App-header">
        <div className="Container">
          <Row>
            <Col>
              <div className="Editor-Container Text-Center">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </div>
            </Col>

            <Col>
              <Skills />
            </Col>
          </Row>
        </div>
      </header>
    </div>
  );
};

export default App;
