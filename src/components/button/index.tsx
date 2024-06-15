import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  title: string;
}

const Button = (props: Props) => {
  const { title, className } = props;
  return (
    <button {...props} className={`${className}`}>
      {title ?? "Click"}
    </button>
  );
};

export default Button;
