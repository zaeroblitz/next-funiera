import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { SemiboldText } from "..";

interface ProductCardProps {
  slug: Slug;
  imageUrl: string;
  title: string;
  price: number;
}

const ProductCard = ({ slug, imageUrl, title, price }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      className="flex transform cursor-pointer flex-col transition duration-300 ease-out hover:scale-105"
      onClick={() => router.push(`/products/${slug.current}`)}
    >
      {/* Image Default Background */}
      <div className="flex items-center justify-center rounded-3xl bg-[#F0F0F0]">
        {/* Image */}
        <div className="relative h-[250px] w-full 2xl:h-[350px]">
          <Image
            src={imageUrl}
            alt="Product1"
            fill
            sizes="100%"
            className="rounded-3xl bg-center bg-no-repeat object-cover"
          />
        </div>
      </div>

      <SemiboldText textSize="text-[20px]" additonStyles="mt-3">
        {title}
      </SemiboldText>
      <SemiboldText
        textColor="text-emerald-500"
        textSize="text-[20px]"
        additonStyles="mt-3"
      >
        ${price}
      </SemiboldText>
    </div>
  );
};

export default ProductCard;
