import React from "react";
import Head from "next/head";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { IProduct } from "../../services/product/product.model";
import ProductDetail from "../../containers/ProductDetail";
import { serverUrl } from "../../config";
import { IAPIAvoResponse } from "../../services/database/types";

interface Props {
  data: IProduct;
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
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
