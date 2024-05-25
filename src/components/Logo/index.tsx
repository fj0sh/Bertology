import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/images/Bertology_Logo.png"}
      alt={"Logo"}
      width="300"
      height="100"
    ></Image>
  );
};

export default Logo;
