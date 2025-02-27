import expresslogo from "../assets/logos/mdi_rocket-launch-outline.png";
import trucklogo from "../assets/logos/mdi_truck-fast-outline.png";
import safelogo from "../assets/logos/safe.png";
import instalogo from "../assets/logos/insta-vector.png";
import facebooklogo from "../assets/logos/facebook-vector.png";
import linkedinlogo from "../assets/logos/linkdin-vector.png";
import calllogo from "../assets/logos/_phone-in-talk-outline-rounded.png";
import messagelogo from "../assets/logos/ic_outline-email.png";
import timelogo from "../assets/logos/nest-clock-farsight-analog-outline-rounded.png";
import gpaylogo from "../assets/logos/gpay.png";
import visalogo from "../assets/logos/Visa_Logo 1 (1).png";
import mastercardlogo from "../assets/logos/mastercard.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" h-[600px] border-t ">
      <div className="flex justify-around h-[300px]  items-center">
        <div className="flex gap-6 items-center">
          <img src={expresslogo} alt="" className="w-[130px] h-[130px]" />
          <div>
            <div className="text-3xl font-medium">EXPRESS SHIPPING</div>
            <div className="text-gray-500">Shipping in 24 Hours</div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src={trucklogo} alt="" className="w-[130px] h-[130px]" />
          <div>
            <div className="text-3xl font-medium">SHIPPING TRACKING</div>
            <div className="text-gray-500">
              Online order tracking available
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src={safelogo} alt="" className="w-[100px] h-[100px]" />
          <div>
            <div className="text-3xl font-medium">BUY SAFELY</div>
            <div className="text-gray-500">Shipping in 24 Hours</div>
          </div>
        </div>
      </div>
      <div className="border-2  flex justify-around h-[250px]">
        <div className="flex flex-col gap-2 border-r-2 h-full py-10 pr-20 pl-10 flex-1">
          <p className="font-bold text-[30px]">CUSTOMER SERVICE</p>
          <p>Contact us</p>
          <p>Shipping & Returns</p>
          <p>Terms & Conditions</p>
          <p>Delivery</p>
        </div>
        <div className="flex flex-col gap-2 border-r-2 h-full py-10 pr-10 pl-10 flex-1">
          <p className="font-bold text-[30px]">INFORMATION</p>
          <p>About</p>
          <p>Payments</p>
          <p>Size guide</p>
          <NavLink to="/adminlogin">
          <p>Administrator</p>
          </NavLink>
        </div>
        <div className="flex flex-col gap-2 border-r-2 h-full py-10 pr-10 pl-10 flex-1">
          <p className="font-bold text-[30px]">FOLLOW US</p>
          <div className="flex gap-5 items-center">
            <img src={instalogo} alt="" className="w-[22px] h-[22px]" />
            <img src={facebooklogo} alt="" className="w-[22px] h-[22px]" />
            <img src={linkedinlogo} alt="" className="w-[36px] h-[36px]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 border-r-2 h-full py-10 pr-10 pl-10 flex-1">
          <p className="font-bold text-[30px]">CONTACT US</p>
          <div className="flex gap-4">
            <img src={calllogo} alt="" className="w-[22px] h-[22px]" />
            <p className=" text-gray-400">(+91) 6282525215</p>
          </div>
          <div className="flex gap-4">
            <img src={messagelogo} alt="" className="w-[22px] h-[22px]" />
            <p className=" text-gray-400">info@kenvill.com</p>
          </div>
          <div className="flex gap-4">
            <img src={timelogo} alt="" className="w-[22px] h-[22px]" />
            <p className=" text-gray-400">8.00 - 21.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-6 pr-2 items-center pt-2">
        <img src={gpaylogo} alt="" className="w-[45px] h-[35px]" />
        <img src={visalogo} alt="" className="w-[80px] h-[28px]" />
        <img src={mastercardlogo} alt="" className="w-[50px] h-[30px]" />
      </div>
    </div>
  );
};

export default Footer;
