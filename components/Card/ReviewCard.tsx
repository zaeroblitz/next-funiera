import Image from "next/image";
import React from "react";
import RegularText from "../Typography/RegularText";
import SemiboldText from "../Typography/SemiboldText";

interface ReviewCardProps {
  pictUrl: string;
  name: string;
  status: string;
  message: string;
}

const ReviewCard = ({ pictUrl, name, status, message }: ReviewCardProps) => {
  return (
    <div className={`w-full rounded-2xl bg-white p-6`}>
      {/* Heading */}
      <div className="flex gap-x-3">
        <div className="relative h-16 w-16 rounded-full">
          <Image
            src={pictUrl}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-y-[2px]">
          <SemiboldText textSize="normal">{name}</SemiboldText>
          <RegularText weight="medium" textColor="[#777777]">
            {status}
          </RegularText>
        </div>
      </div>

      <RegularText textColor="[#777777]" additonStyles="mt-6">
        {message}
      </RegularText>
    </div>
  );
};

export default ReviewCard;
