import Image from "next/image";
import React from "react";
import { SemiboldText, RegularText } from "../";

interface CollectionCardProps {
  imageUrl: string;
  title: string;
  category: string;
  onClick?: () => void;
}

const CollectionCard = ({
  imageUrl,
  title,
  category,
  onClick = () => {},
}: CollectionCardProps) => {
  return (
    <div
      className="group relative h-[350px] cursor-pointer overflow-hidden rounded-xl transition duration-300 ease-out"
      onClick={() => {}}
    >
      {/* Image */}
      <div className="relative h-[350px] w-auto rounded-xl">
        <Image
          src={imageUrl}
          alt="Collection 1"
          className="ease-ou transform rounded-xl bg-center bg-no-repeat object-cover transition duration-300 group-hover:scale-105 2xl:rounded-2xl"
          fill
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-xl bg-black/30 py-2 px-4 backdrop-blur-lg">
        <SemiboldText textSize="[20px]" textColor="white">
          {title}
        </SemiboldText>
        <RegularText textColor="white" weight="light">
          {category}
        </RegularText>
      </div>
    </div>
  );
};

export default CollectionCard;
