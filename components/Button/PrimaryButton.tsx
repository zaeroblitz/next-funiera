import React from "react";

interface PrimaryButtonProps {
  label: string;
  paddingX?: string;
  paddingY?: string;
  background?: string;
  textColor?: string;
  width?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  label,
  paddingX = "px-16",
  paddingY = "py-4",
  background = "bg-[#D38669]",
  textColor = "text-white",
  width = "w-auto",
  onClick = () => {},
}: PrimaryButtonProps) => {
  return (
    <button
      className={`
      transform rounded-xl text-lg font-medium transition duration-300 hover:scale-105 hover:opacity-90 ${paddingX} ${paddingY} ${background} ${textColor} ${width}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
