import Link from "next/link";
import React from "react";


const Avatar = () => {
  return (
    <div className="flex border-none bg-gray-700 p-2 rounded-lg gap-3">
      <Link href={"/admin-profile"}>
        <div
          className="border border-black-500 rounded-full bg-white p-4 w-[50px] h-[50px]"
        ></div>
      </Link>
      <div className="self-center">
        sdifhoiduh
      </div>
    </div>
  );
};

export default Avatar;
