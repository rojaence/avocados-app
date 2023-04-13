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
import CartButton from "../Cart/CartButton";

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
      <CartButton />
    </Navbar>
  );
}

export default MainNavbar;
