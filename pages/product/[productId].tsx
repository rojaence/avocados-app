import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { IProduct } from "../../services/product/product.model";
import ProductDetail from "../../containers/ProductDetail";
import { serverUrl } from "../../config";
import { IAPIAvoResponse } from "../../services/database/types";

interface Props {
  data: IProduct;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${serverUrl}/api/avo`);
  const { data: products }: IAPIAvoResponse = await res.json();

  const paths = products.map(({ id }) => ({
    params: {
      productId: id,
    },
  }));

  return {
    paths,
    // Fallback: false => 404 for everything else
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await fetch(`${serverUrl}/api/avo/${params?.productId}`);
  const data: IProduct = await res.json();
  return {
    props: {
      data,
    },
  };
};

function ProductItem({ data }: Props) {
  return (
    <section>
      <Head>
        <title>{data?.name}</title>
      </Head>
      {data && <ProductDetail product={data} loading={false} />}
    </section>
  );
}

export default ProductItem;
