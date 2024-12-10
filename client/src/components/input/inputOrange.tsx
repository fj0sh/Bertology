import React, { Fragment } from "react";

interface Props {
  onChange?: (e: any) => void;
  value?: string | number;
  height?: string;
  label?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  limit?: number;
}

const InputOrange = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    const {
      height,
      required,
      label,
      value,
      type,
      placeholder,
      disabled,
      limit,
    } = props;

    return (
      <>
        <div className="w-full flex flex-col gap-2">
          {label && (
            <p className="text-white text-[18px]">
              {label} {required && <span className="text-red-600">*</span>}
            </p>
          )}
          <input
            ref={ref}
            maxLength={limit}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={`border text-white p-2 border-orangePrimary bg-background w-full rounded-lg focus:border-white ${
              disabled ? "border-orangePrimary bg-[#EBEBE4]" : "border-orangePrimary "
            }`}
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
