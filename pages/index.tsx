import React, { useEffect, useState } from "react";
import Head from "next/head";
import { IProduct } from "../services/product/product.model";
import ProductList from "../containers/ProductList";

function Index() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  return (
    <div>
      <Head>
        <title>Avocados</title>
      </Head>
      <h1 className="text-center mb-3">All avocados</h1>
      <ProductList products={products} loading={loading} />
    </div>
  );
}

export default Index;
