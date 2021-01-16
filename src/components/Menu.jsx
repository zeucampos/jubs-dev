import * as React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Menu = () => (
    <div id="menu">
        <Container>
            <Row>
                <Col>
                    <a href="/" className="logo-link">
                        <div className="logo">
                            <div className="logo-slug">JJ</div>
                            <span>JOBS JUBS</span>
                        </div>
                    </a>
                </Col>
                <Col className="text-right">
                    <Nav className="ml-auto" style={{ width: "fit-content" }}>
                        <Nav.Link href="#portfolio" className="primary-text">Jobs</Nav.Link>
                        <Nav.Link href="#contact" className="primary-text">Contato</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Menu