import { COMPANY_NAME } from "../constants";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css"
const Header = () => {
  return (
    <div className="h-[130px] bg-F0E0CE flex items-center justify-around">
      <div className="text-5xl">{COMPANY_NAME}</div>
      <div className="flex gap-20">
        <p className="header-text">HOME</p>
        <p className="header-text">MENS</p>
        <p className="header-text">ABOUT US</p>
        <p className="header-text">CONTACT US</p>
        <UserOutlined className="text-3xl"/>
        <div className="flex items-center gap-2">
        <ShoppingCartOutlined className="text-3xl"/>
        <p className="header-text">MY CART</p>

        </div>
      </div>
    </div>
  );
};

export default Header;
