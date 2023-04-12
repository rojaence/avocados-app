import React from "react";
import Link from "next/link";
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Badge,
} from "reactstrap";
import Icon from "../Icon";

function MainNavbar() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <img src="/images/favicon.png" alt="logo" style={{ width: "2rem" }} />
        Avocados
      </NavbarBrand>
      <Nav className="me-auto">
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">about</NavLink>
        </NavItem>
      </Nav>
      <Badge
        className="d-flex align-items-center gap-2 text-decoration-none px-3 py-2 text-dark border border-secondary"
        color="light"
        href="#"
      >
        <Icon name="shoppingCart" color="dark" size={20} />
        Cart
      </Badge>
    </Navbar>
  );
}

export default MainNavbar;
