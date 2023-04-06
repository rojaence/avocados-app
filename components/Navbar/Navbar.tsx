import React from "react";
import Link from "next/link";

function Navbar(props) {
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </menu>
    </nav>
  );
}

export default Navbar;
