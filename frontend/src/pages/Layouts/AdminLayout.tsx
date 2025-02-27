import AdminHeader from "../../components/AdminHeader";

import myorders from "../../assets/logos/my-orders.png";
import address from "../../assets/logos/manage-address.png";
import { useState } from "react";
import { useNavigate, Outlet,} from "react-router-dom";
import dashboardicon from "../../assets/icons/Dashboard.png"
import productsicon from "../../assets/icons/products.jpg"
import customericon from "../../assets/icons/customers.jpg"
import ordersicon from "../../assets/icons/Orders.png"
import categoryicon from "../../assets/icons/category.png"
import settingicon from "../../assets/icons/Setting.png"
import reporticon from "../../assets/icons/sales report.png"
import bannericon from "../../assets/icons/Banner-manage.png"
import couponicon from "../../assets/icons/manage-coupon.png"


const AdminLayout = () => {
  const [selected, setSelected] = useState("account");
  const navigate = useNavigate();
  return (
    <div>
      <AdminHeader /> {/* Admin Header */}
   <div className="h-[1000px] flex ">
    <div className="w-[400px] flex flex-col items-center pt-4 ">

      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border border-gray-300 ${
          selected === "account" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() =>{ setSelected("account"); navigate("/admin") }}
      >
        <img src={dashboardicon} alt="" className="w-8 h-8 "  style={{fill:"black"}}/>
        <p className="text-xl font-semibold">Dashboard</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "orders" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("orders"); navigate("/admin/products")}}
      >
        <img src={productsicon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Products</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={customericon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Customers</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={ordersicon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Orders</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={categoryicon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Category</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={settingicon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Settings</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={reporticon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">sales Report</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={bannericon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Banner Manage</p>
      </button>
      <button
        className={`flex items-center justify-start pl-6 gap-4 w-[350px] h-[70px] border-2 border-t-0 ${
          selected === "address" ? "bg-[#F0E0CE]" : ""
        }`}
        onClick={() => {setSelected("address");navigate("/") }}
      >
        <img src={couponicon} alt="" className="w-8 h-8" />
        <p className="text-xl font-semibold">Manage Coupons</p>
      </button>
    </div>
    <div className="flex-1 border-2 min-h-[900px] shadow-xl pl-10 pt-10">
     <Outlet/>
    </div>

   </div>
    </div>
  );
};

export default AdminLayout;
