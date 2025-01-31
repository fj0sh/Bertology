import React from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  z?: string;
}

const ModalContainer = (props: Props) => {
  const { children, width, height, z } = props;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2] overflow-y-auto z-[${z}]`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div
        className="relative flex flex-col *:text-white items-center border rounded-[15px] bg-background bg-opacity-95 border-black z-20 justify-center gap-8 p-[2rem] my-10"
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
