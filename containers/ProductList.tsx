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
import Link from "next/link";

import { IProduct } from "../services/product/product.model";
import Skeleton from "../components/Skeleton/Skeleton";
import { generateSkeletons } from "../utils";

interface Props {
  products: IProduct[];
  loading: boolean;
}

function ProductList({ products, loading }: Props) {
  const skeletons = generateSkeletons(6, { className: "" });
  return (
    <Container>
      {loading ? (
        <Row xs={1} md={2} lg={3} className="g-2 justify-content-center">
          {skeletons.map((skeleton, index) => {
            return (
              <Col
                key={`skeleton-${index}`}
                style={{ width: "400px", height: "400px" }}
              >
                {skeleton}
              </Col>
            );
          })}
        </Row>
      ) : (
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
      )}
    </Container>
  );
}

export default ProductList;
