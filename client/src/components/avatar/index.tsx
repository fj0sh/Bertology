import React from "react";

type AvatarProps = {
  className?: string;
};

const Avatar = (props: AvatarProps) => {
  return (
    <div>
      <div
        className="border border-black-500 rounded-full bg-white p-4 w-[25px] h-[25px]"
        {...props}
      ></div>
    </div>
  );
};

export default Avatar;
