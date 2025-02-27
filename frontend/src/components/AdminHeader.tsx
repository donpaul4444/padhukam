import { COMPANY_NAME } from "../constants";
import { UserOutlined } from "@ant-design/icons";

import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <div className="relative">
        <div className="h-[130px] bg-F0E0CE flex items-center justify-between px-36 border border-black">
          <div className="flex items-end  w-full justify-between">
            <div className="text-5xl border ">{COMPANY_NAME}</div>
            <div className="flex gap-6 items-center border ">
              <p className="text-xl">Welcome, Admin</p>
              <NavLink to="">
                <UserOutlined className="text-3xl" />
              </NavLink>
              <button className="bg-black text-white rounded-lg p-1 px-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40px] bg-white"></div>
    </>
  );
};

export default AdminHeader;
