import React from "react";
import { useRouter } from "next/router";

function ProductItem() {
  const {
    query: { productId },
  } = useRouter();

  return <div>Esta es la página de producto {productId}</div>;
}

export default ProductItem;
