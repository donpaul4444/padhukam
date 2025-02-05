import React from "react";
import addaddressicon from "../../assets/icons/material-symbols_add-circle.png";
import { NavLink } from "react-router-dom";

const UserAddress = () => {
  return (
    <div>
      <p className="text-2xl font-bold ">Manage Addresses</p>
      <p className="text-gray-400 mb-8 text-xl">
        Here You can manage the addresses,You can Add,edit or delete the
        addresses
      </p>
      <div className="flex flex-col gap-8 w-[80%] ">
        <NavLink to="/useraccount/editaddress">

        <div className="flex gap-4 border  shadow-md items-center  h-[60px] pl-4 bg-[#F0E0CE]">
          <img src={addaddressicon} alt="" className="w-8 h-8" />
          <p className="text-xl">Add New Address</p>
        </div>
        </NavLink>
        {/* Address Block */}
        <div className="flex gap-4 border  shadow-md  pl-4 pt-1 justify-between">
          <div className="p-2">
            <p className="bg-black rounded-lg text-white px-1 text-sm w-[60px] flex justify-center">
              Default
            </p>
            <p>Abhilash Abin Zachariah, Parayil House Mekozhoor P O</p>
            <p>Pathanamthitta, Kerala</p>
            <p>689678</p>
            <p>Mobile: +919585176147</p>
          </div>

          <div className="flex items-end  gap-2 p-2">
            <div
              style={{ color: "#522B00" }}
              className="border-r px-2  border-black"
            >
              Edit
            </div>
            <div style={{ color: "#522B00" }}>Change</div>
          </div>
        </div>
        {/* Address Block */}
        <div className="flex gap-4 border  shadow-md  pl-4 pt-1 justify-between">
          <div className="p-2">
            <p>Abhilash Abin Zachariah, Parayil House Mekozhoor P O</p>
            <p>Pathanamthitta, Kerala</p>
            <p>689678</p>
            <p>Mobile: +919585176147</p>
          </div>

          <div className="flex items-end  gap-2 p-2">
            <div
              style={{ color: "#522B00" }}
              className="border-r px-2  border-black"
            >
              Make default
            </div>
            <div
              style={{ color: "#522B00" }}
              className="border-r px-2  border-black"
            >
              Edit
            </div>
            <div style={{ color: "#522B00" }}>Change</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserAddress;
