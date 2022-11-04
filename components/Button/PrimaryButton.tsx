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
  paddingX = "16",
  paddingY = "4",
  background = "[#D38669]",
  textColor = "white",
  width = "auto",
  onClick = () => {},
}: PrimaryButtonProps) => {
  return (
    <button
      className={`
      transform rounded-xl text-lg font-medium transition duration-300 hover:scale-105 hover:opacity-90 px-${paddingX} py-${paddingY} bg-${background} text-${textColor} w-${width}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
