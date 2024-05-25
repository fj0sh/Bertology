import Logo from "../Logo";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-[20%] h-screen bg-black-500">
        <div className="mt-[15px]">
          {/* <Logo /> */}
          <div className="mt-[60px]">
            <ul className="*:mb-[20px] ml-[15px]">
              <li className="text-white hover:text-orange-100">Dashboard</li>
              <li className="text-white hover:text-orange-100">
                Booking Request
              </li>
              <li className="text-white hover:text-orange-100">
                Reserved Products
              </li>
              <li className="text-white hover:text-orange-100">Products</li>
              <li className="text-white hover:text-orange-100">Users</li>
              <li className="text-white hover:text-orange-100">
                Service History
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-[35px] ml-[15px]">
          <p className="text-white hover:text-orange-100">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
