import React from "react";
import Head from "next/head";
import { GetStaticPropsContext } from "next";
import { IProduct } from "../services/product/product.model";
import ProductList from "../containers/ProductList";
import { IAPIAvoResponse } from "../services/database/types";
import { serverUrl } from "../config";

interface Props {
  products: IProduct[];
  loading: boolean;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${serverUrl}/api/avo`);
  const { data }: IAPIAvoResponse = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

function Index({ products }: Props) {
  return (
    <div>
      <Head>
        <title>Avocados</title>
      </Head>
      <h1 className="text-center mb-3">All avocados</h1>
      <ProductList products={products} loading={false} />
    </div>
  );
}

export default Index;
