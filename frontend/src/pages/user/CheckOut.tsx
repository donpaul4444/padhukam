
import bestSeller from "../../temp";
import gpaylogo from "../../assets/logos/gpay.png";
import visalogo from "../../assets/logos/Visa_Logo 1 (1).png";
import mastercardlogo from "../../assets/logos/mastercard.png";
import Downarrow from "../../assets/images/Down-arrow.png";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="px-20 flex gap-20">
      <div className="w-[1200px]">
        <div className="w-full border-b border-black my-2 mb-4 "></div>
        <p className="text-3xl font-semibold mb-4">Your Cart</p>
        <div className="flex justify-between">
          <div className="flex gap-4 py-4">
            {bestSeller.slice(0, 2).map((val) => (
              <div className="border border-black p-2 w-[150px] h-[150px]">
                <img src={val.image} alt="" className="w-32 h-32" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-green-600 font-semibold text-2xl">
              Arrives By Mon, May 2023
            </p>
          </div>
        </div>
        <div className="flex justify-end " style={{ color: "#522B00" }}>
          Edit Cart
        </div>
        <div className="w-full border-b border-black my-2 mb-4 "></div>
        <div className="h-[200px]">

          <div className="flex  justify-between ">
            <div>
              <p className="text-2xl font-bold mb-2">Delivery Address</p>
              <p className="text-gray-400">Default</p>
              <p>Abhilash Abin Zachariah, Parayil House Mekozhoor P O</p>
              <p>Pathanamthitta, Kerala</p>
              <p>689678</p>
              <p>Mobile:+91 9585176147</p>
            </div>
            <div className="flex gap-2">
              <div>Quantity :</div>
              <button
                className="flex bg-red h-6 w-10 justify-center items-center py-2 rounded-lg gap-1"
                style={{ backgroundColor: "#F0E0CE" }}
              >
                <div>1</div>
                <img src={Downarrow} alt="" className="w-3 h-2" />
              </button>
            </div>
          </div>
          <div className="flex justify-end  items-center gap-2">
            <div
              style={{ color: "#522B00" }}
              className="border-r px-2  border-black"
            >
              Edit
            </div>
            <div style={{ color: "#522B00" }}>Change</div>
          </div>

          <div className="w-full border-b border-black my-2"></div>
        </div>
        <div className="h-[190px]">
          <p className="text-2xl font-bold">Payment Method</p>
          <p className="mb-4">Select any payment method</p>
          <div className="flex gap-4 items-center ">
            <div className="rounded-lg  w-4 h-4 border-black border"></div>
            <div>Debit Card / Credit Card</div>
          </div>
          <div className="flex gap-4 items-center ">
            <div className="rounded-lg  w-4 h-4 border-black border"></div>
            <div>UPI Method</div>
          </div>
          <div className="flex gap-4 items-center ">
            <div className="rounded-lg  w-4 h-4 border-black border"></div>
            <div>Internet Banking *Internet Charges may apply</div>
          </div>
        </div>
        <div className="w-full border-b border-black mb-10"></div>
        <NavLink to="/order-complete">

        <button className="bg-black text-white text-3xl rounded-lg w-[400px] h-[70px]">
          Place your order
        </button>
        </NavLink>
      </div>
      {/* Right Side */}
      <div className=" flex-1  flex flex-col gap-5">

        <div
          style={{ backgroundColor: "#FCFAFA" }}
          className="shadow-md flex flex-col gap-5 py-5"
        >
          <p className="flex justify-center text-2xl">ORDER SUMMARY</p>
          <div className="flex justify-between px-4">
            <p className="text-xl">2 ITEMS</p>
            <p className="text-xl">₹ 12,000</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">Delivery Charges</p>
            <p className="text-xl">Free</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">GST Amount</p>
            <p className="text-xl">₹ 1831</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">Coupon Applied</p>
            <p className="text-xl text-gray-500">KENVILLFIRST20</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl text-blue-500">Discount 15%</p>
            <p className="text-xl text-blue-500">-₹ 1,800</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-2xl font-semibold">TOTAL</p>
            <p className="text-2xl font-semibold">₹ 10,200</p>
          </div>
        </div>
        <p className="text-white bg-black text-3xl justify-center flex h-[70px] items-center">
          Place your order
        </p>
        <div className="flex flex-col gap-2">
          <p className="underline text-xl">Contact Us</p>
          <p className="underline text-xl">Delivery</p>
          <p className="underline text-xl">Return & Refund</p>
          <p className="underline text-xl">Contact Us</p>
          <p className="text-xl mt-5 mb-2">ACCEPTED PAYMENT METHODS</p>
          <div className="flex justify-start gap-4">
            <img src={gpaylogo} alt="" className="w-[40px] h-[30px]" />
            <img src={visalogo} alt="" className="w-[70px] h-[25px]" />
            <img src={mastercardlogo} alt="" className="w-[40px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
