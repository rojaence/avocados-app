import React from "react";
import { FormGroup, Form, Input, Button, Row, Col } from "reactstrap";
import { IProduct } from "../../services/product/product.model";
import Icon from "../Icon";

interface Props {
  product: IProduct;
}

function AddToCart({ product }: Props) {
  return (
    <Form>
      <Row xs={1} md={2}>
        <Col>
          <FormGroup>
            <Input type="number" name={product.id} />
          </FormGroup>
        </Col>
        <Col>
          <Button color="success d-flex align-items-center gap-2">
            <Icon name="shoppingCart" color="light" />
            Add to cart
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddToCart;
