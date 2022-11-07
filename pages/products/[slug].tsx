import type { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import { fetchProduct } from "../../utils/fetchProduct";
import {
  ExtraLargeText,
  Gallery,
  OutlineButton,
  PrimaryButton,
  RegularText,
  SemiboldText,
} from "../../components";

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  console.log(product);

  return (
    <div className="bg-[#FAFAFA]">
      <Head>
        <title>{product.name ? `FurniEra | ${product.name}` : "FuniEra"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-[120px]">
        {/* Breadcrumb */}
        <section className="bg-[#F0F0F0] px-20 py-10">
          <div className="mx-auto flex max-w-[1480px] gap-5">
            <Link href="/">Home /</Link>
            <Link href="/products">Products /</Link>
            <p>{product.name}</p>
          </div>
        </section>

        {/* Product Detail */}
        <section className="mx-20 mt-[100px] grid max-w-[1480px] grid-cols-2 gap-x-10 2xl:mx-auto">
          <Gallery images={product.images} productName={product.name} />

          {/* Details */}
          <div className="h-fit rounded-2xl bg-[#F0F0F0] px-8 py-10">
            {/* Product Name */}
            <ExtraLargeText size="text-[40px]" leading="leading-[120%]">
              {product.name}
            </ExtraLargeText>

            {/* Product Price */}
            <SemiboldText textSize="text-[32px]" textColor="text-emerald-500">
              $ {product.price}
            </SemiboldText>

            {/* Product Tags */}
            <div className="my-3 flex flex-wrap gap-x-3">
              {product.categories.map((category) => (
                <div
                  key={category._id}
                  className="transform cursor-pointer rounded-xl bg-slate-200 px-4 py-3 text-slate-400 transition duration-300 hover:scale-105"
                >
                  {category.title}
                </div>
              ))}
            </div>

            {/* Product Description */}
            <RegularText
              textColor="text-[#777777]"
              additonStyles="leading-[180%]"
            >
              {product.description}
            </RegularText>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-x-10">
              <PrimaryButton label="Add to Cart" />
              <OutlineButton label="Buy Now" background="bg-transparent" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug } = context.query;

  const products = await fetchProduct(slug!.toString());
  const product = products[0];

  return {
    props: {
      product,
    },
  };
};
