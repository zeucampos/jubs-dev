import * as React from "react";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Nav, Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <Container className="container">
        <Row>
          <Col>
            <a href="/">
              <div className="logo">
                <div className="logo-slug">JJ</div>
                <span>JOBS JUBS</span>
              </div>
            </a>
          </Col>
          <Col className="text-right">
            <Nav className="ml-auto" style={{ width: "fit-content" }}>
              <Nav.Link href="#portfolio">Jobs</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="app-header">
          <Col className="vertical-center">
            <div>
              <h1 className="glitch" data-text="Hello World!">
                Hello World!
              </h1>
            </div>
            {/* <h4 className="text-muted">
              PRECISA DE UM FREELANCER?
            </h4> */}

            <Row className="justify-content-center ">
              <Col md={8}>
                <p className="text-muted text-center">
                  Olá, sou Eliseu Campos ou Jubs =D, desenvolvedor full stack. 6
                  anos de experiência em desenvolvimento. Tendo experiência em
                  desenvolvimento de <strong>Aplicativos Mobile</strong>,
                </p>
              </Col>
            </Row>

            <div>
              <Button>CONTATO</Button>
            </div>
          </Col>
          {/* <Col></Col> */}
        </Row>
        <Row>
          <Col md={8}>
            <div className="editor-container text-center">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
          </Col>

          <Col md={4}>
            <Skills />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
