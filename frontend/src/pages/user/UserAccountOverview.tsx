import React from "react";

const UserAccountOverview = () => {
  return (
    <div className=" flex flex-col gap-5">
      <p className="text-3xl font-bold">My Details</p>
      <p className="text-xl font-semibold">Personal information</p>
      <div className="flex gap-16">
        <div>
          <p>First Name</p>
          <input
            type="text"
            placeholder=" First Name"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
        <div>
          <p>Last Name</p>
          <input
            type="text"
            placeholder=" Last Name"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
      </div>
      <div className="flex gap-16">
        <div>
          <p>City/District/Town</p>
          <input
            type="text"
            placeholder=" City/District/Town"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
        <div>
          <p>State</p>
          <input
            type="text"
            placeholder=" State"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
      </div>
      <div>
        <p>Address</p>
        <textarea
          placeholder="Enter the Address"
          className="bg-[#F9F6F6] w-[560px] h-[100px] border border-black resize-none"
        />
      </div>
      <div>
        <p>Pin Code</p>
        <input
          type="text"
          placeholder=" Pin code"
          className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
        />
      </div>
      <p className="text-xl font-semibold mt-10">Contact information</p>
      <div className="flex gap-16">
        <div>
          <p>Mobile Number</p>
          <input
            type="text"
            placeholder=" Mobile Number"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
        <div>
          <p>E-mail</p>
          <input
            type="text"
            placeholder=" Email"
            className="bg-[#F9F6F6] w-[250px] h-[35px] border border-black"
          />
        </div>
      </div>
      <button className="bg-[#AA6843] text-white text-xl px-2 py-1 rounded-full w-20">
        Edit
      </button>
    </div>
  );
};

export default UserAccountOverview;
