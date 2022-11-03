import React from "react";

interface SemiboldTextProps {
  textSize?: string;
  textColor?: string;
  additonStyles?: string;
  children: React.ReactNode;
}

const SemiboldText = ({
  textSize = "lg",
  textColor = "[#171727]",
  additonStyles = "",
  children,
}: SemiboldTextProps) => {
  return (
    <p
      className={`font-semibold text-${textSize} text-${textColor} ${additonStyles}`}
    >
      {children}
    </p>
  );
};

export default SemiboldText;
