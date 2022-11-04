import React, { useState } from "react";
import Head from "next/head";
import {
  ExtraLargeText,
  OutlineButton,
  PrimaryButton,
  ProductCard,
  SemiboldText,
} from "../../components";
import Image from "next/image";

const Products = () => {
  const categories = ["All Furniture", "Chairs", "Tables", "Sofas", "Cupboard"];
  const products = [
    {
      imageUrl: "/images/product1.png",
      title: "Smastad Cupboard",
      price: "Rp 1.229.500",
    },
    {
      imageUrl: "/images/product2.png",
      title: "Millberget Chair",
      price: "Rp 1.599.000",
    },
    {
      imageUrl: "/images/product3.png",
      title: "Landskrona Sofa",
      price: "Rp 3.495.000",
    },
    {
      imageUrl: "/images/product4.png",
      title: "Raskog troly",
      price: "Rp 229.000",
    },
    {
      imageUrl: "/images/product5.png",
      title: "Hemlingby Sofa",
      price: "Rp 1.229.500",
    },
    {
      imageUrl: "/images/product6.png",
      title: "Tommyard Table",
      price: "Rp 2.559.150",
    },
    {
      imageUrl: "/images/product7.png",
      title: "Sakarias Sofa",
      price: "Rp 1.895.000",
    },
    {
      imageUrl: "/images/product8.png",
      title: "Raskog Chair",
      price: "Rp 395.000",
    },
  ];
  const [categoriesActive, setCategoriesActive] = useState("All Furniture");

  return (
    <div>
      <Head>
        <title>FuniEra | Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-20 mt-[70px] mb-[120px] max-w-[1480px] 2xl:mx-auto">
        {/* Heading */}
        <section className="flex flex-col items-center">
          <SemiboldText textColor="[#D38669]" additonStyles="leading-[27px]">
            Discover Our Best Furnitures
          </SemiboldText>
          <ExtraLargeText leading="[68px]">Furniture Overview</ExtraLargeText>
          <div className="mt-[30px] grid w-full grid-cols-12 items-center justify-between">
            {/* Sort */}
            <div className="col-span-2">
              <OutlineButton
                label="Sort"
                borderColor="[#171627]"
                textColor="[#171627]"
              />
            </div>

            {/* Categories */}
            <div className="col-span-8 justify-self-center">
              {categories.map((category) => (
                <PrimaryButton
                  key={category}
                  label={category}
                  width="fit"
                  paddingX="[24px]"
                  paddingY="[14px]"
                  textColor={
                    categoriesActive !== category ? "[#171627]]" : "white"
                  }
                  background={
                    categoriesActive !== category ? "transparent" : "[#D38669]"
                  }
                />
              ))}
            </div>

            {/* Filter */}
            <div className="col-span-2 justify-self-end">
              <OutlineButton
                label="Filter"
                borderColor="[#171627]"
                textColor="[#171627]"
              />
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mt-[60px] grid grid-cols-4 gap-x-[30px] gap-y-[50px]">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Products;