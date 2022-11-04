import React from "react";
import Image from "next/image";

import { RegularText, ExtraLargeText, PrimaryButton, OutlineButton } from "../";

const Footer = () => {
  return (
    <footer className="relative mx-20 mb-[120px] h-[612px] max-w-[1480px] rounded-3xl 2xl:mx-auto">
      <div className="relative h-[612px] w-full rounded-3xl">
        <Image
          src="/images/footer-bg.jpeg"
          alt="Footer Background"
          fill
          className="rounded-3xl object-cover"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 h-[612px] w-full rounded-3xl bg-[#171627]/90"></div>

      {/* Context */}
      <div className="absolute inset-0 top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center ">
        <RegularText
          weight="medium"
          size="lg"
          textColor="[#D38669]"
          additonStyles="mb-[10px] capitalize"
        >
          why should the service be us?
        </RegularText>
        <ExtraLargeText textColor="white">
          <span className="block capitalize leading-[56px]">
            build your home with a comfortable
          </span>
          <span className="block capitalize leading-[56px]">
            room by using our furniture
          </span>
        </ExtraLargeText>
        <RegularText
          size="lg"
          textColor="white"
          weight="light"
          additonStyles="mt-5"
        >
          <span className="block">
            Looking for quality design furniture? then your choice is right have
            visited our
          </span>
          <span className="block">
            website. We have furniture with reverse quality ready to be sent to
            you
          </span>
        </RegularText>
        <div className="mt-14 flex items-center justify-center gap-x-[30px]">
          <PrimaryButton label="Shop Now" />
          <OutlineButton label="Order Custom" background="transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
