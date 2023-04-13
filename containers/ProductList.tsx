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
import Link from "next/link";

interface Props {
  products: IProduct[];
}

function ProductList({ products }: Props) {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="text-decoration-none"
          >
            <Col className="card-transition">
              <Card className="h-100 shadow-sm text-dark">
                <CardImg src={product.image} alt={product.name + " image"} />
                <CardBody>
                  <CardTitle tag="h4">{product.name}</CardTitle>
                  <CardSubtitle>$ {product.price}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
