import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
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
  const [showSignOutButton, setShowSignOutButton] = useState(false);

  const dispatch = useAppDispatch();
  const { pathname } = useRouter();
  const { data: session } = useSession();
  const { items } = useAppSelector(selectCartItems);
  const { isCartActive } = useAppSelector(cartDisplayStatus);

  useEffect(() => {
    setShowSignOutButton(false);
  }, []);

  return (
    <header className="mx-20 grid max-w-[1480px] grid-cols-3 items-center justify-between py-8 2xl:mx-auto">
      {/* Links */}
      <nav>
        <ul className="flex items-center gap-x-6">
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
          <ShoppingBagIcon className="h-6 w-6 text-[#D38669]" />

          {items.length > 0 && (
            <div className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              {items.length}
            </div>
          )}
        </div>

        {/* Login or User */}
        {!session ? (
          <button
            type="button"
            onClick={() => signIn()}
            className="transform cursor-pointer rounded-xl bg-emerald-500 px-6 py-2 text-white transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Login
          </button>
        ) : (
          <div
            onClick={() => setShowSignOutButton(!showSignOutButton)}
            className="relative flex w-[100px] cursor-pointer items-center gap-x-1 rounded-xl"
          >
            <Image
              src={
                session?.user?.image ||
                "https://img.icons8.com/plumpy/96/000000/user-male-circle.png"
              }
              alt={`${session?.user?.name} avatar`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div className="text-slate-400">
              <ChevronDownIcon className="h-4 w-4" />
            </div>

            {showSignOutButton && (
              <button
                type="button"
                onClick={() => signOut()}
                className="absolute -bottom-14 right-0 w-[100px] cursor-pointer rounded-xl bg-slate-100 px-4 py-2 text-slate-600 shadow-xl"
              >
                Sign Out
              </button>
            )}
          </div>
        )}
      </div>

      {isCartActive && <Cart items={items} />}
    </header>
  );
};

export default Navbar;
