import React from "react";
import Head from "next/head";
import { Button, Col, Row } from "reactstrap";

import { useAppSelector, useAppDispatch } from "../../services/store/hooks";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../services/store/slices/cart";

import CartItem from "../../components/Cart/CartItem";

function index() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <section>
      <Head>
        <title>Cart</title>
      </Head>
      <section className="d-flex flex-column gap-2">
        <h1 className="text-center">Cart Items</h1>
        <Row xs={1} className="justify-content-center g-4">
          {cart.products.map((item) => (
            <Col
              key={item.data.id}
              xs={12}
              md={10}
              lg={8}
              className="border rounded"
            >
              <CartItem product={item.data} quantity={item.quantity} />
            </Col>
          ))}
        </Row>
        <Button color="success" className="align-self-center">
          Check out
        </Button>
      </section>
    </section>
  );
}

export default index;
