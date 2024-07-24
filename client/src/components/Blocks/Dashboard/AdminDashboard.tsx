import React from "react";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-4 w-full h-full gap-10 grid-flow-row *:border *: border-orange *:rounded-lg">
      <div className=" col-span-3 border-orange"></div>
      <div className=" col-span-3 border-orange"></div>
      <div className=" col-span-3 border-orange"></div>
      <div className=" col-span-3 border-orange"></div>

      <div className=" row-start-2 row-span-3 col-span-4 border-orange"></div>
      <div className=" row-start-2 row-span-3 col-span-4 border-orange"></div>
      <div className=" row-start-2 row-span-3 col-span-4 border-orange"></div>
    </div>
  );
};

export default AdminDashboard;
