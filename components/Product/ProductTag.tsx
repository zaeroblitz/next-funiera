import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
}

const ProductTag = ({ title, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="transform cursor-pointer rounded-xl bg-slate-200 px-4 py-3 text-slate-500 transition duration-300 hover:scale-105"
    >
      {title}
    </div>
  );
};

export default ProductTag;
