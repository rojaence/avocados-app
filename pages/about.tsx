import React from "react";
import Head from "next/head";
import {
  Col,
  Container,
  List,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import Icon from "../components/Icon/Icon";

interface Tool {
  name: string;
  url: string;
}

function About() {
  const tools: Tool[] = [
    {
      name: "Next.js",
      url: "https://nextjs.org",
    },
    {
      name: "Typescript",
      url: "https://www.typescriptlang.org",
    },
    {
      name: "Reacstrap",
      url: "https://reactstrap.github.io",
    },
    {
      name: "react-hot-toast",
      url: "https://react-hot-toast.com",
    },
    {
      name: "react-redux",
      url: "https://react-redux.js.org",
    },
    {
      name: "redux-persist",
      url: "https://www.npmjs.com/package/redux-persist",
    },
  ];
  return (
    <Container tag="section">
      <Head>
        <title>About</title>
      </Head>
      <Row xs={1} className="justify-content-center g-4">
        <Col xs={12} lg={8}>
          <h1>This is a simple app to learning next.js</h1>
          <h2>Built With</h2>
        </Col>
        <Col xs={12} md={8}>
          <ListGroup>
            {tools.map((tool) => (
              <ListGroupItem tag="li" className="p-0">
                <a
                  href={tool.url}
                  className="w-100 h-100 d-block py-2 px-3 text-decoration-none"
                  target="_blank"
                >
                  <Icon name="bulletPoint" className="me-2" />
                  <span>{tool.name}</span>
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
