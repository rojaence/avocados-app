import React, { useState, useRef } from "react";
import { FormGroup, Form, Input, Button, Row, Col } from "reactstrap";

import { useAppSelector, useAppDispatch } from "../../services/store/hooks";
import { incrementItem } from "../../services/store/slices/cart";

import toast from "react-hot-toast";

import { IProduct } from "../../services/product/product.model";
import Icon from "../../components/Icon/Icon";

interface Props {
  product: IProduct;
}

function AddToCart({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const quantityInput = useRef<HTMLInputElement>(null);

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(quantityInput.current.value);
    value >= 1 ? setQuantity(value) : setQuantity(1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (quantity >= 1) {
      dispatch(incrementItem({ productPayload: product, quantity }));
      toast.success("Product added.");
      setQuantity(1);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row xs={1} md={2}>
        <Col>
          <FormGroup>
            <Input
              type="number"
              name="quantity"
              innerRef={quantityInput}
              onChange={handleChange}
              value={quantity}
              min={1}
            />
          </FormGroup>
        </Col>
        <Col>
          <Button color="success d-flex align-items-center gap-2" type="submit">
            <Icon name="shoppingCart" color="light" />
            Add to cart
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddToCart;
