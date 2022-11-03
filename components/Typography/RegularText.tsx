import React from "react";

interface RegularTextProps {
  weight?: string;
  size?: string;
  textColor?: string;
  additonStyles?: string;
  children: React.ReactNode;
}

const RegularText = ({
  weight = "normal",
  size = "base",
  textColor = "[#171727]",
  additonStyles = "",
  children,
}: RegularTextProps) => {
  return (
    <p
      className={`text-lg font-${weight} text-${size} text-${textColor} ${additonStyles}`}
    >
      {children}
    </p>
  );
};

export default RegularText;
