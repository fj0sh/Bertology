import React from "react";
import Avatar from "@/components/avatar";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <div>
        <Image
          src="/images/LandingImage.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Landing Image"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
