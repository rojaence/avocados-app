import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Button, Col, Row } from "reactstrap";

import { useAppSelector } from "../../services/store/hooks";

import CartItem from "../../components/Cart/CartItem";

function index() {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    let items = cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
    let cost = cart.products.reduce(
      (acc, curr) => acc + curr.data.price * curr.quantity,
      0
    );
    setTotalItems(items);
    setTotalCost(cost);
  }, [cart.products]);

  return (
    <section>
      <Head>
        <title>Cart</title>
      </Head>
      <section className="d-flex flex-column gap-4">
        <h1 className="text-center">Cart Items</h1>
        <Row xs={1} className="justify-content-center g-4">
          {cart.products.map((item) => (
            <Col key={item.data.id} xs={12} lg={8} className="border rounded">
              <CartItem product={item.data} quantity={item.quantity} />
            </Col>
          ))}
          {cart.products.length === 0 && (
            <Col xs={12} lg={8} className="text-center">
              No items
            </Col>
          )}
        </Row>
        <Row xs={2} className="align-items-center justify-content-center">
          <Col xs={8} md={5}>
            <p>
              <strong>Items: </strong>
              {totalItems}
            </p>
            <p>
              <strong>Subtotal: </strong>$ {totalCost.toFixed(2)}
            </p>
          </Col>
          <Col xs={4} md={3} className="justify-items-end">
            <Button color="success" className="align-self-center">
              Check out
            </Button>
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default index;
