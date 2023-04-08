import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProduct } from "../../services/product/product.model";
import Head from "next/head";

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
      Esta es la página de producto {data?.name}
    </section>
  );
}

export default ProductItem;
