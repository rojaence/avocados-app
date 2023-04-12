import React, { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../services/product/product.model";
import Head from "next/head";
import ProductDetail from "../../containers/ProductDetail";

function ProductItem() {
  const [data, setData] = useState<IProduct>();
  const {
    query: { productId },
  } = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [productId]);

  return (
    <section>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <ProductDetail product={data} />
    </section>
  );
}

export default ProductItem;
