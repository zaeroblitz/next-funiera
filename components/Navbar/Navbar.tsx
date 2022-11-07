import React from "react";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import NavLink from "./NavLink";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { selectCartItems } from "../../redux/slices/cartSlice";
import { Cart } from "../";
import {
  cartDisplayStatus,
  turnOnCartDisplay,
} from "../../redux/slices/cartDisplaySlice";

const Navbar = () => {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectCartItems);
  const { isCartActive } = useAppSelector(cartDisplayStatus);

  return (
    <header className="mx-20 grid max-w-[1480px] grid-cols-3 items-center justify-between py-8 2xl:mx-auto">
      {/* Links */}
      <nav>
        <ul className="flex items-center gap-x-10">
          <NavLink currentPath={pathname} href="/" label="Home" />
          <NavLink currentPath={pathname} href="/products" label="Product" />
          <NavLink currentPath={pathname} href="/showroom" label="Showroom" />
          <NavLink
            currentPath={pathname}
            href="/categories"
            label="Categories"
          />
        </ul>
      </nav>

      {/* Logo */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          <span className="text-[#171727]">Funi</span>
          <span className="text-[#D38669]">Era</span>
        </h1>
      </div>

      <div className="flex items-center justify-end gap-x-4">
        {/* SearchBar */}
        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-[#AAAAAA]" />
          <input
            type="text"
            className="text-gray-400 outline-none placeholder:text-[#AAAAAA]"
            placeholder="Search product..."
          />
        </div>

        {/* Cart */}
        <div
          onClick={() => dispatch(turnOnCartDisplay())}
          className="relative transform cursor-pointer rounded-xl bg-[#D38669]/10 p-3 transition duration-200 hover:scale-105 hover:shadow-md"
        >
          <ShoppingCartIcon className="h-6 w-6 text-[#D38669]" />

          {items.length > 0 && (
            <div className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              {items.length}
            </div>
          )}
        </div>
      </div>

      {isCartActive && <Cart items={items} />}
    </header>
  );
};

export default Navbar;
