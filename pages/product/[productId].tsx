import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProduct } from "../../services/product/product.model";
import Head from "next/head";
import ProductDetail from "../../containers/ProductDetail";

function ProductItem() {
  const [data, setData] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    query: { productId },
  } = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/avo/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <section>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <ProductDetail product={data} loading={loading} />
    </section>
  );
}

export default ProductItem;
