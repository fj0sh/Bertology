import React from "react";

interface Props {
  onClick?: () => void;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  hover?: boolean;
  type?: "submit" | "button";
  fontSize?: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { title, height, width, hover, fontSize, disabled } = props;
  return (
    <button
      disabled={disabled}
      className={`border-none text-white p-2 rounded-lg text-[20px] w-[150px] flex items-center justify-center ${
        hover ? "bg-grey hover:bg-orangeRed" : " bg-orangeRed"
      } ${disabled ? "bg-[#252531]" : " bg-orangeRed"}`}
      style={{ height, width, fontSize }}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
