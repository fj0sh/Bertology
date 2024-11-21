import React, { Fragment } from "react";

interface Props {
  onChange?: (e: any) => void;
  value?: string | number;
  height?: string;
  label?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
}

const InputOrange = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    const { height, label, value, type, placeholder } = props;

    return (
      <>
        <div className="w-full flex flex-col gap-2">
          {label && <p className="text-white text-[18px]">{label}</p>}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className="border text-white p-2 border-orangeRed bg-background w-full rounded-lg focus:border-white"
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
