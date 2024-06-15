import React from "react";

const OtpModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col items-center border rounded-[15px] bg-black bg-opacity-85 border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-[4rem] my-10">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default OtpModal;
