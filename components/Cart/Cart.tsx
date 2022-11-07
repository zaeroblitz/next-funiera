import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

import { SemiboldText, RegularText, PrimaryButton } from "..";
import { useAppDispatch } from "../../lib/hooks";
import {
  decCartItemQty,
  incCartItemQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { turnOffCartDisplay } from "../../redux/slices/cartDisplaySlice";

const Cart = ({ items }: CartProps) => {
  const dispatch = useAppDispatch();
  const totalPrice = items.reduce(
    (total, current) => total + current.product.price * current.qty,
    0
  );

  const handleRemoveItemFromCart = (item: Product) => {
    dispatch(removeFromCart(item));

    toast.success(`${item.name} removed from cart`, {
      icon: "🗑",
    });
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-20 h-screen w-[30%] py-4 pr-10">
        <div className="flex h-full flex-col justify-between overflow-auto rounded-xl bg-white px-10 py-8">
          <div className="mb-4 h-full max-h-full min-h-fit overflow-auto pr-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-100 scrollbar-thumb-rounded-full">
            <SemiboldText textSize="text-base">
              Cart ({items.length}) items
            </SemiboldText>
            <div className="mt-10 flex flex-col gap-y-6">
              {items.map((item) => (
                <div
                  key={`Cart ${item.product._id}`}
                  className="flex items-center gap-x-4"
                >
                  <Image
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    width={64}
                    height={64}
                    className="rounded-lg bg-center bg-no-repeat object-cover"
                  />

                  <div className="flex flex-col gap-y-1">
                    <RegularText>{item.product.name}</RegularText>
                    <SemiboldText textColor="text-emerald-500">
                      $ {item.product.price * item.qty}
                    </SemiboldText>

                    {/* Quantity */}
                    <div className="flex items-center gap-x-2">
                      {/* Dec Qty */}
                      <div
                        onClick={() => {
                          if (item.qty > 1) {
                            dispatch(decCartItemQty(item.product));
                          }
                        }}
                        className="transtion transform cursor-pointer rounded-lg bg-slate-200 p-2 text-slate-600 duration-200 hover:scale-105 hover:shadow-md"
                      >
                        <ChevronDownIcon className="h-3 w-3" />
                      </div>

                      {/* Qty */}
                      <div className="rounded-lg border-2 border-slate-400 bg-transparent px-3 py-1">
                        <RegularText size="text-sm" textColor="text-slate-600">
                          {item.qty}
                        </RegularText>
                      </div>

                      {/* Inc Qty */}
                      <div
                        onClick={() => {
                          if (item.qty < item.product.stock) {
                            dispatch(incCartItemQty(item.product));
                          }
                        }}
                        className="transtion transform cursor-pointer rounded-lg bg-slate-200 p-2 text-slate-600 duration-200 hover:scale-105 hover:shadow-md"
                      >
                        <ChevronUpIcon className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  {/* Remove Item */}
                  <div
                    className="ml-auto transform cursor-pointer rounded-lg bg-pink-500 p-2 text-white transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-pink-200"
                    onClick={() => handleRemoveItemFromCart(item.product)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

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
            />
          </div>
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
