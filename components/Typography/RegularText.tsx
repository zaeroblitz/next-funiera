import React from "react";

interface RegularTextProps {
  weight?: string;
  size?: string;
  textColor?: string;
  additonStyles?: string;
  children: React.ReactNode;
}

const RegularText = ({
  weight = "font-normal",
  size = "text-base",
  textColor = "text-[#171727]",
  additonStyles = "",
  children,
}: RegularTextProps) => {
  return (
    <p className={`${weight} ${size} ${textColor} ${additonStyles}`}>
      {children}
    </p>
  );
};

export default RegularText;
