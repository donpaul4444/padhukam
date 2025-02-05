import { COMPANY_NAME } from "../constants";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import searchicon from "../assets/images/search.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="relative">
        <div className="h-[130px] bg-F0E0CE flex items-center justify-around ">
          <div className="text-5xl">{COMPANY_NAME}</div>
          <div className="flex gap-12 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl ${
                  isActive ? "text-white bg-black p-1 rounded-lg" : "text-black"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `text-xl ${
                  isActive ? "text-white bg-black p-1 rounded-lg" : "text-black"
                }`
              }
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl ${
                  isActive ? "text-white bg-black p-1 rounded-lg" : "text-black"
                }`
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl ${
                  isActive ? "text-white bg-black p-1 rounded-lg" : "text-black"
                }`
              }
            >
              CONTACT US
            </NavLink>
            <NavLink to="/useraccount">

            <UserOutlined className="text-3xl" />
            </NavLink>
            <NavLink to="/cart">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCartOutlined className="text-3xl" />
                  <div className="bg-red-600 w-4 h-4 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center text-sm">
                    1
                  </div>
                </div>
                <div className="text-xl">MY CART</div>
              </div>
            </NavLink>
            <div className="flex justify-end  items-center gap-2">
              <NavLink to="/login">
                <button className="border-r px-2  border-black text-xl">
                  LOGIN
                </button>
              </NavLink>
              <NavLink to="/signup">
              <button className="text-xl">SIGN UP</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex shadow-sm justify-between items-center px-5 w-[900px] h-[50px] border-2 rounded-lg bg-white absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="text-gray-400">
            Search for Products,Brands and more
          </div>
          <img src={searchicon} alt="" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="h-[40px] bg-white"></div>
    </>
  );
};

export default Header;
