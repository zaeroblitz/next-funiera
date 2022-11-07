import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  images: Image[];
  productName: string;
}

const Gallery = ({ images, productName }: Props) => {
  const [imageActive, setImageActive] = useState(images[0]);

  let currentIndex = images.findIndex(
    (image) => image._key === imageActive._key
  );

  const handlePrevButton = () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
      setImageActive(images[currentIndex]);
    } else {
      currentIndex = currentIndex -= 1;
      setImageActive(images[currentIndex]);
    }
  };

  const handleNextButton = () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
      setImageActive(images[currentIndex]);
    } else {
      currentIndex = currentIndex += 1;
      setImageActive(images[currentIndex]);
    }
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="relative">
        {/* Active Image */}
        <div className="relative h-[640px] w-full rounded-3xl bg-[#F0F0F0] 2xl:h-[740px]">
          <Image
            src={imageActive.url}
            alt={productName}
            fill
            sizes="100%"
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Prev Button */}
        <div
          onClick={handlePrevButton}
          className="absolute left-6 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-md"
        >
          <ChevronLeftIcon className="w-6" />
        </div>

        {/* Next Button */}
        <div
          onClick={handleNextButton}
          className="absolute right-6 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-md"
        >
          <ChevronRightIcon className="w-6" />
        </div>

        {/* Indicator */}
        <div className="absolute left-1/2 bottom-6 flex -translate-x-1/2 items-center gap-x-1 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setImageActive(images[index])}
              className={`h-3 w-3 cursor-pointer rounded-full ${
                index === currentIndex ? "bg-white" : "bg-black/20"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Thumbnails Image */}
      <div className="mt-3 grid grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div
            key={image._key}
            onClick={() => setImageActive(image)}
            className={`relative h-[100px] w-[100px] transform cursor-pointer rounded-2xl transition duration-200 hover:scale-105 2xl:h-[120px] 2xl:w-[120px]
                  ${imageActive === image && "border-4 border-[#D38669]"}`}
          >
            <Image
              src={image.url}
              alt={`Image ${productName} ${index + 1}`}
              fill
              sizes="100%"
              className="rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
