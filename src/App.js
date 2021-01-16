import * as React from "react";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Nav, Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <Menu />
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
                  Olá, sou Eliseu Campos ou Jubs =D, desenvolvedor full stack.
                  Com experiência em desenvolvimento de{" "}
                  <strong className="primary-text">Aplicativos Mobile</strong>,{" "}
                  <strong className="primary-text">
                    REST API, Desenvolvimento de software
                  </strong>{" "}
                  em <strong className="primary-text">NodeJS,</strong>{" "}
                  <strong className="primary-text">PHP,</strong>{" "}
                  <strong className="primary-text">JavasScript,</strong>{" "}
                  <strong className="primary-text">Dart,</strong>{" "}
                  Desenvolvimento de websites em{" "}
                  <strong className="primary-text">Wordpress,</strong>{" "}
                  <strong className="primary-text">HTML 5,</strong>{" "}
                  <strong className="primary-text">CSS 3,</strong>{" "}
                  <strong className="primary-text">Webpacks,</strong> e muito
                  mais.
                </p>
              </Col>
            </Row>

            <div>
              <Button className="btn-secondary">CONTATO</Button>
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
