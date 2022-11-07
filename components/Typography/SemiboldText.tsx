import React from "react";

interface SemiboldTextProps {
  textSize?: string;
  textColor?: string;
  additonStyles?: string;
  children: React.ReactNode;
}

const SemiboldText = ({
  textSize = "text-lg",
  textColor = "text-[#171727]",
  additonStyles = "",
  children,
}: SemiboldTextProps) => {
  return (
    <p className={`font-semibold ${textSize} ${textColor} ${additonStyles}`}>
      {children}
    </p>
  );
};

export default SemiboldText;
