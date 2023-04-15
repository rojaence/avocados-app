import React from "react";
import { Button, Col, Row } from "reactstrap";
import Link from "next/link";
import { IProduct } from "../../services/product/product.model";
import Icon from "../Icon";

import { useAppDispatch } from "../../services/store/hooks";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../services/store/slices/cart";

interface Props {
  product: IProduct;
  quantity: number;
}

function CartItem({ product, quantity }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Row tag="article" xs={1} md={2} className="align-items-center p-2">
      <Col xs={12} md={3} lg={2}>
        <img src={product.image} alt="product image" className="w-100" />
      </Col>
      <Col xs={12} md={9}>
        <Row xs={1} md={2}>
          <Col xs={12} md={8}>
            <Link
              href={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <h2>{product.name}</h2>
            </Link>
            <span className="fs-3">
              {quantity} x ${product.price}
            </span>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex justify-content-end align-items-center gap-3 h-100">
              <Button
                color="light"
                className="border"
                onClick={() =>
                  dispatch(incrementItem({ productPayload: product }))
                }
              >
                <Icon name="add" />
              </Button>
              <Button
                color="light"
                className="border"
                onClick={() =>
                  dispatch(decrementItem({ productPayload: product }))
                }
              >
                <Icon name="remove" />
              </Button>
              <Button
                color="light"
                className="border"
                onClick={() => dispatch(removeItem({ productId: product.id }))}
              >
                <Icon name="close" />
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CartItem;
