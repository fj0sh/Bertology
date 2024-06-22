import Logo from "../Logo";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-[20rem] h-screen bg-black">
        <div className="mt-[15px]">
          {/* <Logo /> */}
          <div className="mt-[60px]">
            <ul className="*:mb-[20px] ml-[15px] text-white">
              <li className="hover:text-orange">Dashboard</li>
              <li className="hover:text-orange">Booking Request</li>
              <li className=" hover:text-orange">Reserved Products</li>
              <li className=" hover:text-orange">Products</li>
              <li className=" hover:text-orange">Users</li>
              <li className=" hover:text-orange">Service History</li>
            </ul>
          </div>
        </div>

        <div className="mb-[35px] ml-[15px]">
          <p className="text-white hover:text-orange">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
