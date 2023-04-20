import React from "react";
import { Col, Container, Row } from "reactstrap";
import Icon from "./Icon/Icon";

interface Props {
  className: string;
}

function Footer({ className = "" }: Partial<Props>) {
  return (
    <footer className={className}>
      <Container>
        <Row xs={1} md={2} className="justify-content-center">
          <Col xs={12} md={8} className="text-md-end text-center">
            <p>Coded by </p>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex flex-column flex-md-row gap-3">
              <a
                href="https://www.linkedin.com/in/ronny-endara/"
                target="_blank"
                className="d-flex align-items-center justify-content-center justify-content-md-start text-decoration-none"
              >
                <Icon name="linkedin" />
                Ronny Endara
              </a>
              <a
                href="https://www.github.com/rojaence"
                target="_blank"
                className="d-flex align-items-center justify-content-center justify-content-md-start text-decoration-none"
              >
                <Icon name="github" color="purple" />
                @rojaence
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
