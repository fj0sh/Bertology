import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/Bertology_Logo.png"
      alt="Logo"
      height={100}
      width={100}
    />
  );
};

export default Logo;
