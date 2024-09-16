import React, { Fragment } from "react";

interface Props {
  onChange?: (e: any) => void;
  value?: string | number;
  height?: string;
  label?: string;
  type?: "text" | "number";
}

const InputOrange = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    const { height, label, value, type } = props;

    return (
      <>
        <div className="w-full flex flex-col gap-2">
          {label && <p className="text-white text-[18px]">{label}</p>}
          <input
            ref={ref}
            type={type}
            className="border text-white p-2 border-orangePrimary bg-background w-full rounded-lg focus:outline-none"
            style={{ height }}
            value={value}
            {...props}
          />
        </div>
      </>
    );
  }
);

InputOrange.displayName = "InputOrange";

export default InputOrange;
