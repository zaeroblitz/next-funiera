import Link from "next/link";
import React from "react";

interface NavLinkProps {
  currentPath: string;
  href: string;
  label: string;
}

const NavLink = ({ currentPath, href, label }: NavLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`font-medium xl:text-lg ${
          currentPath === href ? "text-[#D38669]" : "text-[#171727]"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
