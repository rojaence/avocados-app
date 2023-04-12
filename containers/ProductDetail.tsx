import React from "react";
import { Badge, Col, Container, Row, Table } from "reactstrap";
import { IProduct } from "../services/product/product.model";
import AddToCart from "../components/Cart/AddToCart";

interface Props {
  product: IProduct;
}

function ProductDetail({ product }: Props) {
  return (
    <Container tag="section">
      {product ? (
        <Container>
          <Row xs={1} md={2}>
            <Col md={4} lg={5}>
              <img
                src={product.image}
                alt="product image"
                className="d-block mx-auto w-100"
              />
            </Col>
            <Col className="align-self-center">
              <h1>{product.name}</h1>
              <span className="d-block">$ {product.price}</span>
              <Badge color="secondary my-3">SKU: {product.sku}</Badge>
              <AddToCart product={product} />
            </Col>
          </Row>
          <Row xs={1} className="mt-2">
            <Col lg={8} className="mx-auto">
              <Table>
                <thead>
                  <tr>
                    <th className="bg-light" colSpan={2}>
                      About this avocado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.attributes).map(([attr, val]) => {
                    return (
                      <tr key={attr}>
                        <th className="text-capitalize">{attr}</th>
                        <th className="fw-normal">{val}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}

export default ProductDetail;
