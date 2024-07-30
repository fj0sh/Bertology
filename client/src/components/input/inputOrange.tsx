import React, { Fragment } from "react";

interface Props {
  onChange?: (e: any) => void;
  height?: string;
  label?: string;
}

const InputOrange = (props: Props) => {
  const { height, label } = props;

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        {label ? <p className="text-white text-[18px]">{label}</p> : <></>}
        <input
          type="text"
          className="border text-white p-2 border-orange bg-background w-full rounded-lg focus:outline-none"
          style={{ height }}
          {...props}
        />
      </div>
    </>
  );
};

export default InputOrange;
