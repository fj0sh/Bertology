import React from "react";

interface Props {
  onClick?: () => void;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  onHover?: boolean;
  type?: "submit" | "button";
  fontSize?: string;
}

const Button = (props: Props) => {
  const { title, height, width, onHover, fontSize } = props;
  return (
    <button
      className={`border-none text-white p-2 rounded-lg text-[20px] w-[150px] flex items-center justify-center ${
        onHover ? "bg-grey hover:bg-orange" : " bg-orange"
      }`}
      style={{ height, width, fontSize }}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
