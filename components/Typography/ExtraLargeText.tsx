import React from "react";

interface ExtraLargeTextProps {
  size?: string;
  weight?: string;
  textColor?: string;
  leading?: string;
  children: React.ReactNode;
}

const ExtraLargeText = ({
  size = "5xl",
  weight = "bold",
  textColor = "[#171727]",
  leading = "normal",
  children,
}: ExtraLargeTextProps) => {
  return (
    <h2
      className={`text-${size} text-${textColor} font-${weight} leading-${leading}`}
    >
      {children}
    </h2>
  );
};

export default ExtraLargeText;
