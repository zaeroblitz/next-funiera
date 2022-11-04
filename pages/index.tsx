import React from "react";
import Head from "next/head";
import Image from "next/image";
import { BoltSlashIcon, SquaresPlusIcon } from "@heroicons/react/24/solid";

import {
  ExtraLargeText,
  Navbar,
  OutlineButton,
  PrimaryButton,
  RegularText,
  SemiboldText,
  CollectionCard,
  ReviewCard,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAFAFA]">
      <Head>
        <title>FuniEra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mb-[120px] w-full">
        {/* Hero Section */}
        <section className="mt-20 ml-20 flex max-w-[1480px] items-center justify-between overflow-hidden 2xl:mx-auto">
          {/* Left */}
          <div className="ml-5 flex flex-col">
            <RegularText weight="medium" textColor="[#D38669]">
              Low Price, Good Quality
            </RegularText>
            <ExtraLargeText>
              <span className="block leading-[68px]">Make Your Room</span>
              <span className="block leading-[68px]">
                Interior View Smarter
              </span>
              <span className="block leading-[68px]">And More Comfortable</span>
            </ExtraLargeText>
            <RegularText
              textColor="[#777777]"
              additonStyles="mt-5 max-w-[500px] leading-[180%]"
            >
              Looking for quality design furniture? then your choice is right
              have visited our website. We have furniture with reverse quality
              ready to be sent to you
            </RegularText>
            <div className="item-center mt-16 flex gap-x-8">
              <PrimaryButton label="Shop" />
              <OutlineButton label="Order Custom" />
            </div>
          </div>

          {/* Right */}
          <div className="relative mx-16">
            {/* Main Image */}
            <div className="relative h-[600px] w-[480px] 2xl:h-[660px] 2xl:w-[580px]">
              <Image
                src="/images/hero1.png"
                alt="Hero Image 1"
                fill
                className="object-contain"
              />
            </div>

            {/* Sub Image */}
            <div className="absolute top-1/2 -right-[500px] h-[510px] w-[480px] -translate-y-1/2 2xl:-right-[600px] 2xl:h-[560px] 2xl:w-[580px]">
              <Image
                src="/images/hero2.png"
                alt="Hero Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="my-[120px] mx-20 flex max-w-[1480px] flex-col gap-y-14 2xl:mx-auto">
          {/* Heading */}
          <div className="flex items-center justify-between">
            <SemiboldText textSize="[38px]">Our Collections</SemiboldText>
            <OutlineButton label="View All" paddingX="8" paddingY="4" />
          </div>

          {/* Collections */}
          <div className="grid grid-cols-4 gap-x-[30px]">
            <CollectionCard
              imageUrl="/images/collection1.png"
              title="Gursken Bedde"
              category="Bed Room"
            />
            <CollectionCard
              imageUrl="/images/collection2.png"
              title="Hembjudden"
              category="Living Room"
            />
            <CollectionCard
              imageUrl="/images/collection3.png"
              title="Pearlbath Haven"
              category="Bath Room"
            />
            <CollectionCard
              imageUrl="/images/collection4.png"
              title="Bind Ascent"
              category="Kitchen"
            />
          </div>
        </section>

        {/* Custom Furniture Section */}
        <section className="my-[120px] mx-20 grid max-w-[1480px] grid-cols-2 items-center gap-x-[60px] 2xl:mx-auto">
          {/* Image */}
          <div className="relative h-[620px] w-[560px] rounded-2xl">
            <Image
              src="/images/custom.png"
              alt="Custom Furniture Image"
              fill
              className="object-contain"
            />
          </div>

          {/* Context */}
          <div className="flex flex-col">
            {/* Heading */}
            <div className="mb-14">
              <RegularText
                weight="medium"
                textColor="[#D38669]"
                additonStyles="mb-1"
              >
                Low Price, Good Quality
              </RegularText>
              <ExtraLargeText>Easy Custom Furniture</ExtraLargeText>
              <RegularText
                textColor="[#777777]"
                additonStyles="mt-5 leading=[180%]"
              >
                Can&apos;t find what you want in terms of color or size of the
                furniture? Don&apos;t worry, you can customize the furniture the
                way you want
              </RegularText>
            </div>

            {/* Card */}
            <div className="mb-14 flex items-center justify-between gap-x-20">
              <div className="flex flex-col">
                <div className="mb-3 h-fit w-fit rounded-xl bg-[#D38669]/10 p-[10px]">
                  <BoltSlashIcon className="h-8 w-8 text-[#D38669]" />
                </div>
                <SemiboldText>No Extra Cost</SemiboldText>
                <RegularText textColor="[#777777]" additonStyles="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </RegularText>
              </div>

              <div className="flex flex-col">
                <div className="mb-3 h-fit w-fit rounded-xl bg-[#D38669]/10 p-[10px]">
                  <SquaresPlusIcon className="h-8 w-8 text-[#D38669]" />
                </div>
                <SemiboldText>Custom As You Wish</SemiboldText>
                <RegularText textColor="[#777777]" additonStyles="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </RegularText>
              </div>
            </div>

            <PrimaryButton label="Order Custom" width="fit" />
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="bg-[#171627]">
          <div className="mx-auto flex max-w-[1480px] flex-col items-center px-20 py-20 2xl:px-32">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-center">
              <SemiboldText textColor="[#D38669]">Happy Customers</SemiboldText>
              <ExtraLargeText textColor="white" leading="[68px]">
                <span className="block">How Happy They Are</span>
                <span className="block">With Our service</span>
              </ExtraLargeText>
            </div>

            <div className="mx-auto my-14 grid max-w-max grid-cols-6 justify-center gap-[30px]">
              <div className="col-span-3">
                <ReviewCard
                  pictUrl="/images/user1.png"
                  name="Nana Nia"
                  status="Housewife"
                  message="“Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.”"
                />
              </div>
              <div className="col-span-3">
                <ReviewCard
                  pictUrl="/images/user2.png"
                  name="Uni Sriwahyu"
                  status="Artist & Model"
                  message="“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.”"
                />
              </div>
              <div className="col-span-2">
                <ReviewCard
                  pictUrl="/images/user3.png"
                  name="Bocil Kehidupan"
                  status="College Student"
                  message="“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”"
                />
              </div>
              <div className="col-span-2">
                <ReviewCard
                  pictUrl="/images/user4.png"
                  name="Not Imposter"
                  status="Retiredman"
                  message="“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”"
                />
              </div>
              <div className="col-span-2">
                <ReviewCard
                  pictUrl="/images/user5.png"
                  name="Zoe April"
                  status="College Student"
                  message="“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”"
                />
              </div>
            </div>

            <PrimaryButton label="View All" paddingX="8" width="fit" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
