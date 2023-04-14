import React from "react";
import { Badge } from "reactstrap";
import { useAppSelector } from "../../services/store/hooks";
import Icon from "../Icon";

function CartButton() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Badge
      className="d-flex align-items-center gap-2 text-decoration-none px-3 py-2 text-dark border border-secondary"
      color="light"
      href="/cart"
    >
      <Icon name="shoppingCart" color="dark" size={20} />
      <span>Cart</span>
      <span>{`(${cart.products.reduce(
        (acc: number, curr) => acc + curr.quantity,
        0
      )})`}</span>
    </Badge>
  );
}

export default CartButton;
