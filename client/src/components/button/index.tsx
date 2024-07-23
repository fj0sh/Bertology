import React from "react";

interface Props {
  onClick?: () => void;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  onHover?: boolean;
  type?: "submit" | "button";
}

const Button = (props: Props) => {
  const { title, height, width, onHover } = props;
  return (
    <button
      className={`border-non text-white p-2 rounded-lg text-[20px] w-[150px] ${
        onHover ? "bg-grey hover:bg-orange" : " bg-orange"
      }`}
      style={{ height, width }}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
