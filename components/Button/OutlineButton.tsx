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
  paddingX = "12",
  paddingY = "4",
  borderColor = "[#D38669]",
  textColor = "[#D38669]",
  onClick = () => {},
}: OutlineButtonProps) => {
  return (
    <button
      className={`
    rounded-xl border text-lg font-medium transition duration-300 hover:scale-105 hover:opacity-90
    px-${paddingX} py-${paddingY} border-${borderColor} text-${textColor} bg-${background}
    `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutlineButton;
