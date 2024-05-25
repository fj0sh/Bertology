import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  title: string;
}

const Button = (props: Props) => {
  const { title } = props;
  return <button {...props}>{title ?? "Click"}</button>;
};

export default Button;
