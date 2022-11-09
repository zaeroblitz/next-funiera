import type { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import toast from "react-hot-toast";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import { fetchProduct } from "../../utils/fetchProduct";
import { addToCart } from "../../redux/slices/cartSlice";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { decQty, incQty, selectQty } from "../../redux/slices/qtySlice";
import { turnOnCartDisplay } from "../../redux/slices/cartDisplaySlice";
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
  const dispatch = useAppDispatch();
  const qty = useAppSelector(selectQty);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty }));

    toast.success(`${product.name} added to cart`);
  };

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
          {/* Images */}
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
                  className="transform cursor-pointer rounded-xl bg-slate-200 px-4 py-3 text-slate-500 transition duration-300 hover:scale-105"
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

            {/* Quantity */}
            <div className="mt-3 flex items-center gap-x-4">
              {/* Dec Qty */}
              <div
                onClick={() => {
                  if (qty > 1) {
                    dispatch(decQty());
                  }
                }}
                className="transtion transform cursor-pointer rounded-lg bg-slate-200 p-2 text-slate-600 duration-200 hover:scale-105 hover:shadow-md"
              >
                <ChevronDownIcon className="h-4 w-4" />
              </div>

              {/* Qty */}
              <div className="rounded-lg border-2 border-slate-300 bg-transparent px-4 py-1">
                <RegularText textColor="text-slate-600">{qty}</RegularText>
              </div>

              {/* Inc Qty */}
              <div
                onClick={() => {
                  if (qty < product.stock) {
                    dispatch(incQty());
                  }
                }}
                className="transtion transform cursor-pointer rounded-lg bg-slate-200 p-2 text-slate-600 duration-200 hover:scale-105 hover:shadow-md"
              >
                <ChevronUpIcon className="h-4 w-4" />
              </div>

              <RegularText
                size="text-sm"
                textColor="text-slate-500"
                additonStyles="ml-1"
              >
                {product.stock} left
              </RegularText>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-x-10">
              <PrimaryButton label="Add to Cart" onClick={handleAddToCart} />
              <OutlineButton
                label="Buy Now"
                background="bg-transparent"
                onClick={() => {
                  handleAddToCart();
                  dispatch(turnOnCartDisplay());
                }}
              />
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
