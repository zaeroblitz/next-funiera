import React from "react";

interface ExtraLargeTextProps {
  size?: string;
  weight?: string;
  textColor?: string;
  leading?: string;
  additionStyles?: string;
  children: React.ReactNode;
}

const ExtraLargeText = ({
  size = "text-5xl",
  weight = "font-bold",
  textColor = "text-[#171727]",
  leading = "leading-normal",
  additionStyles = "",
  children,
}: ExtraLargeTextProps) => {
  return (
    <h2
      className={`${size} ${textColor} ${weight} ${leading} ${additionStyles}`}
    >
      {children}
    </h2>
  );
};

export default ExtraLargeText;
