import React, { Fragment } from "react";

interface Props {
  onChange?: (e: any) => void;
  value?: string | number;
  height?: string;
  label?: string;
  type?: "text" | "number";
}

const InputOrange = (props: Props) => {
  const { height, label, value, type } = props;

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        {label ? <p className="text-white text-[18px]">{label}</p> : <></>}
        <input
          type={type}
          className="border text-white p-2 border-orange bg-background w-full rounded-lg focus:outline-none"
          style={{ height }}
          value={value}
          {...props}
        />
      </div>
    </>
  );
};

export default InputOrange;
