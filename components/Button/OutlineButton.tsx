import React from "react";

interface OutlineButtonProps {
  label: string;
  background?: string;
  paddingX?: string;
  paddingY?: string;
  borderColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const OutlineButton = ({
  label,
  background = "white",
  paddingX = "px-12",
  paddingY = "py-4",
  borderColor = "border-[#D38669]",
  textColor = "text-[#D38669]",
  onClick = () => {},
}: OutlineButtonProps) => {
  return (
    <button
      className={`
    rounded-xl border text-lg font-medium transition duration-300 hover:scale-105 hover:opacity-90
    ${paddingX} ${paddingY} ${borderColor} ${textColor} bg-${background}
    `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutlineButton;
