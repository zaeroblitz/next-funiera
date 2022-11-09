import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { useAppDispatch } from "../../lib/hooks";
import {
  decCartItemQty,
  incCartItemQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { RegularText, SemiboldText } from "../";

const CartItem = ({ product, qty }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveItemFromCart = (item: Product) => {
    dispatch(removeFromCart(item));

    toast.success(`${item.name} removed from cart`, {
      icon: "🗑",
    });
  };

  return (
    <div className="flex items-center gap-x-4">
      <Image
        src={product.images[0].url}
        alt={product.name}
        width={64}
        height={64}
        className="rounded-lg bg-center bg-no-repeat object-cover"
      />

      <div className="flex flex-col gap-y-1">
        <RegularText>{product.name}</RegularText>
        <SemiboldText textColor="text-emerald-500">
          $ {product.price * qty}
        </SemiboldText>

        {/* Quantity */}
        <div className="flex items-center gap-x-2">
          {/* Dec Qty */}
          <div
            onClick={() => {
              if (qty > 1) {
                dispatch(decCartItemQty(product));
              }
            }}
            className="transtion transform cursor-pointer rounded-lg bg-slate-200 p-2 text-slate-600 duration-200 hover:scale-105 hover:shadow-md"
          >
            <ChevronDownIcon className="h-3 w-3" />
          </div>

          {/* Qty */}
          <div className="rounded-lg border-2 border-slate-400 bg-transparent px-3 py-1">
            <RegularText size="text-sm" textColor="text-slate-600">
              {qty}
            </RegularText>
          </div>

          {/* Inc Qty */}
          <div
            onClick={() => {
              if (qty < product.stock) {
                dispatch(incCartItemQty(product));
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
        onClick={() => handleRemoveItemFromCart(product)}
      >
        <TrashIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default CartItem;
