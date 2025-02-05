import profilepic from "../../assets/logos/profile-pic.png";
import accountsmall from "../../assets/logos/account-small.png";
import myorders from "../../assets/logos/my-orders.png";
import address from "../../assets/logos/manage-address.png";
import { useState } from "react";
import { useNavigate, Outlet,} from "react-router-dom";


const UserAccountLayout = () => {
 
    const [selected, setSelected] = useState("account");
    const navigate = useNavigate();
  return (
    <div className="h-[1000px] flex ">
      <div className="w-[400px] flex flex-col items-center pt-4 ">
        <div className="flex shadow-md w-[350px] justify-center gap-4 items-center h-[120px] mb-8">
          <img src={profilepic} alt="" className="w-14 h-14" />
          <div>
            <p className="text-xl">Hello,</p>
            <p className=" text-xl font-semibold">Abhilash Abin Zachariah</p>
          </div>
        </div>
        <button
          className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border border-gray-300 ${
            selected === "account" ? "bg-[#F0E0CE]" : ""
          }`}
          onClick={() =>{ setSelected("account"); navigate("/useraccount") }}
        >
          <img src={accountsmall} alt="" className="w-8 h-8" />
          <p className="text-xl font-semibold">Account Overview</p>
        </button>
        <button
          className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
            selected === "orders" ? "bg-[#F0E0CE]" : ""
          }`}
          onClick={() => {setSelected("orders"); navigate("/useraccount/myorders")}}
        >
          <img src={myorders} alt="" className="w-8 h-8" />
          <p className="text-xl font-semibold">My Orders</p>
        </button>
        <button
          className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
            selected === "address" ? "bg-[#F0E0CE]" : ""
          }`}
          onClick={() => {setSelected("address");navigate("/useraccount/address") }}
        >
          <img src={address} alt="" className="w-8 h-8" />
          <p className="text-xl font-semibold">Manage Addressess</p>
        </button>
      </div>
      <div className="flex-1 border-2 min-h-[900px] shadow-xl pl-10 pt-10">
       <Outlet/>
      </div>
    </div>
  );
};

export default UserAccountLayout;
