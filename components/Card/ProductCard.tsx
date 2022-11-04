import React from "react";
import Image from "next/image";

import { SemiboldText } from "..";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  return (
    <div className="flex transform cursor-pointer flex-col transition duration-300 ease-out hover:scale-105">
      {/* Image Default Background */}
      <div className="flex items-center justify-center rounded-3xl bg-[#F0F0F0]">
        {/* Image */}
        <div className="relative h-[250px] w-[250px]">
          <Image
            src={imageUrl}
            alt="Product1"
            fill
            className="bg-center bg-no-repeat object-cover"
          />
        </div>
      </div>

      <SemiboldText textSize="[20px]" additonStyles="mt-3">
        {title}
      </SemiboldText>
      <SemiboldText textSize="[20px]" additonStyles="mt-3">
        {price}
      </SemiboldText>
    </div>
  );
};

export default ProductCard;
