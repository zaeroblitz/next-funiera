import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";

import { PrimaryButton, RegularText, SemiboldText } from "../components";
import { GetServerSideProps } from "next";
import { fetchLineItems } from "../utils/fetchLineItems";

interface Props {
  products: StripeProduct[];
}

const Success = ({ products }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const subtotal = products.reduce(
    (total, product) => total + product.price.unit_amount / 100,
    0
  );

  return (
    <div>
      <Head>
        <title>Thank You! | FuniEra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-20 mb-[120px] grid max-w-[1480px] grid-cols-2 gap-x-10 rounded-2xl bg-slate-100 px-10 py-8 2xl:mx-auto">
        {/* Left */}
        <section className="flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-x-4">
            <div className="text-emerald-500">
              <CheckBadgeIcon className="h-14 w-14" />
            </div>

            <SemiboldText>
              Thank You, {session?.user?.name || "Guest"}
            </SemiboldText>
          </div>

          {/* Card 1 */}
          <div className="mt-5 flex flex-col rounded-xl bg-slate-50 px-8 py-6">
            {/* Confirmed Order */}
            <div className="flex flex-col gap-y-1 border-b border-slate-200 pb-5">
              <RegularText weight="font-medium">
                Your order is confirmed
              </RegularText>
              <RegularText size="text-sm" textColor="text-zinc-400">
                We&apos;ve accepted your order, ande we&apos;re getting it
                ready. Come back to this page for updates on your shipment
                status.
              </RegularText>
            </div>

            {/* Tracking Number */}
            <div className="mt-2 flex flex-col gap-y-1">
              <RegularText weight="font-medium">
                Other Tracking Number
              </RegularText>
              <RegularText size="text-sm" textColor="text-zinc-400">
                WASD214441625
              </RegularText>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mt-5 flex flex-col rounded-xl bg-slate-50 px-8 py-6">
            <div className="flex flex-col gap-y-1">
              <RegularText weight="font-medium">Order Status</RegularText>
              <RegularText size="text-sm" textColor="text-zinc-400">
                You&apos;ll get shipping and delivery updates by email and text.
              </RegularText>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex w-full items-center justify-between pl-4">
            <RegularText>Need Help? Contact Us</RegularText>
            <PrimaryButton
              paddingX="px-6"
              paddingY="py-4"
              label="Continue Shopping"
              onClick={() => router.push("/")}
            />
          </div>
        </section>

        {/* Right */}
        <section className="h-fit rounded-xl bg-slate-50 px-8 py-6">
          {/* Products */}
          <div className="flex flex-col gap-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <div className="flex gap-x-4">
                  {/* Product Image */}
                  <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-slate-200">
                    <PhotoIcon className="h-[30px] w-[30px] text-slate-300" />

                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                      {product.quantity}
                    </div>
                  </div>

                  {/* Product Name */}
                  <SemiboldText>{product.description}</SemiboldText>
                </div>

                {/* Product Price */}
                <SemiboldText textColor="text-emerald-500">
                  $ {product.amount_total / 100}
                </SemiboldText>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="mt-8 flex flex-col gap-y-1 border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between">
              <RegularText textColor="text-zinc-400">Subtotal</RegularText>
              <SemiboldText textColor="text-emerald-500">
                $ {subtotal}
              </SemiboldText>
            </div>

            <div className="flex items-center justify-between">
              <RegularText textColor="text-zinc-400">Discount</RegularText>
              <SemiboldText textColor="text-pink-500">$ {0}</SemiboldText>
            </div>

            <div className="flex items-center justify-between">
              <RegularText textColor="text-zinc-400">Shipping</RegularText>
              <SemiboldText textColor="text-emerald-500">$ {20}</SemiboldText>
            </div>
          </div>

          {/* Grand Total */}
          <div className="mt-8 flex flex-col gap-y-1 border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between">
              <RegularText size="text-lg" textColor="text-zinc-400">
                Subtotal
              </RegularText>
              <SemiboldText textColor="text-emerald-500">
                $ {subtotal + 20}
              </SemiboldText>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session_id = context.query.session_id as string;
  const products = await fetchLineItems(session_id);

  return {
    props: {
      products,
    },
  };
};
