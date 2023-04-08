import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { IProduct } from "../services/product/product.model";
import Head from "next/head";

function Index() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Avocados</title>
      </Head>
      <Navbar />
      <h1>Hola mundo</h1>
      <p>avocados</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
