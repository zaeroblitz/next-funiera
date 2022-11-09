import React from "react";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import CartItem from "./CartItem";
import getStripe from "../../utils/get-stripe";
import { SemiboldText, PrimaryButton } from "..";
import { useAppDispatch } from "../../lib/hooks";
import { fetchPostJSON } from "../../utils/api-helper";
import { turnOffCartDisplay } from "../../redux/slices/cartDisplaySlice";
import toast from "react-hot-toast";

const Cart = ({ items }: CartProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const totalPrice = items.reduce(
    (total, current) => total + current.product.price * current.qty,
    0
  );

  const handlePayWithStripe = async () => {
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/stripe",
      { items }
    );

    //* If Internal Server Error (500)
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    //* Redirect to Checkout
    const stripe = await getStripe();

    toast.loading("Redirecting...");

    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    console.warn(error.message);
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-20 h-screen w-[30%] py-4 pr-10">
        <div className="flex h-full flex-col justify-between overflow-auto rounded-xl bg-white px-10 py-8">
          {/* Empty Cart */}
          {items.length === 0 && totalPrice === 0 && (
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
              <ShoppingCartIcon className="h-10 w-10 text-slate-400" />
              <SemiboldText>Your Cart is Empty!</SemiboldText>
              <PrimaryButton
                label="Go Shopping"
                paddingX="px-4"
                paddingY="py-2"
                onClick={() => {
                  router.push("/products");
                  dispatch(turnOffCartDisplay());
                }}
              />
            </div>
          )}

          {items.length > 0 && totalPrice > 0 && (
            <>
              <div className="mb-4 h-full max-h-full min-h-fit overflow-auto pr-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-100 scrollbar-thumb-rounded-full">
                <SemiboldText textSize="text-base">
                  Cart ({items.length}) items
                </SemiboldText>
                <div className="mt-10 flex flex-col gap-y-6">
                  {items.map((item) => (
                    <CartItem
                      key={`Cart ${item.product._id}`}
                      product={item.product}
                      qty={item.qty}
                    />
                  ))}
                </div>
              </div>

              {/* Grand Total & Pay Button */}
              <div className="w-full rounded-xl bg-slate-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <SemiboldText textColor="text-slate-500">
                    Total Price:
                  </SemiboldText>
                  <SemiboldText textColor="text-emerald-500">
                    $ {totalPrice}
                  </SemiboldText>
                </div>

                <PrimaryButton
                  label="Pay With Stripe"
                  paddingX="px-3"
                  paddingY="py-2"
                  width="w-full"
                  background="bg-emerald-500"
                  onClick={() => {
                    if (session) {
                      handlePayWithStripe();
                    } else {
                      toast.error("Please login to continue checkout");
                    }
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => dispatch(turnOffCartDisplay())}
        className="fixed inset-0 z-10 h-full w-full cursor-pointer bg-black/60"
      ></div>
    </>
  );
};

export default Cart;
