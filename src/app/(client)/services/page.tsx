import React from "react";

const Services = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center h-screen bg-orange">
        <div className="text-center">
          <p className="text-white font-bold text-[40px]">Services</p>
        </div>
      </div>
      <div className=" relative h-[60vh] p-28">
        <div className="border border-orange rounded-lg w-full h-full p-6">
          <p className="text-[25px]">
            Everything we sell, we can also install, We are your local auto
            electronics upgrades with certified and experienced technicians who
            work with all car brands and models. As a well known, certified auto
            electronic upgrades installer, we always strive for the highest
            quality and we treat every car as if it were our own. Our staff are
            experienced automotive technicians who can install any electronic
            upgrade in your car, whether it{`'`}s a dash cam, remote starter,
            backup camera or anything else.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
