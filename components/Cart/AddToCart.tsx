import React, { useState } from "react";
import { FormGroup, Form, Input, Button, Row, Col } from "reactstrap";

import { useAppSelector, useAppDispatch } from "../../services/store/hooks";
import {
  incrementItem,
  decrementItem,
  updateQuantityItem,
} from "../../services/store/slices/cart";

import { IProduct } from "../../services/product/product.model";
import Icon from "../Icon";

interface Props {
  product: IProduct;
}

function AddToCart({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    value >= 1
      ? (setQuantity(value),
        dispatch(
          updateQuantityItem({ productPayload: product, quantity: value })
        ))
      : (setQuantity(1),
        dispatch(updateQuantityItem({ productPayload: product, quantity: 1 })));
  };

  return (
    <Form>
      <Row xs={1} md={2}>
        <Col>
          <FormGroup>
            <Input
              type="number"
              name={product.id}
              onChange={handleChange}
              value={
                cart.products.find((p) => p.data.id === product.id)?.quantity ||
                1
              }
              min={1}
            />
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
