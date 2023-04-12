import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { IProduct } from "../services/product/product.model";

interface Props {
  products: IProduct[];
}

function ProductList({ products }: Props) {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-2">
        {products.map((product) => (
          <Col key={product.id} className="card-transition">
            <Card className="h-100 shadow-sm">
              <CardImg src={product.image} alt={product.name + " image"} />
              <CardBody>
                <CardTitle tag="h4">{product.name}</CardTitle>
                <CardSubtitle>$ {product.price}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
