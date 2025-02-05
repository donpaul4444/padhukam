import CartItem from "../../components/CartItem";
import bestSeller from "../../temp";
import Downarrow from "../../assets/images/Down-arrow.png";
import Delete from "../../assets/icons/Delete.png";
import Add from "../../assets/icons/Add.png";
import gpaylogo from "../../assets/logos/gpay.png";
import visalogo from "../../assets/logos/Visa_Logo 1 (1).png";
import mastercardlogo from "../../assets/logos/mastercard.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className="px-20 flex gap-20">
      <div className="w-[1200px]">
        <p className="text-3xl font-bold mb-2">YOUR CART</p>
        <p className="text-2xl mb-6">Total 2 Items In Your Cart</p>
        {bestSeller.slice(0, 2).map((val) => (
          <div>
            <div className="w-full border-b border-black my-2"></div>
            <div className="flex  justify-between ">
              <CartItem
                image={val.image}
                name={val.name}
                rating={val.rating}
                colour={val.colour}
                size={val.size}
                price={val.price}
              />
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
            <div className="flex justify-end ">
              <img src={Delete} alt="" className="w-5 h-5" />
            </div>

            <div className="w-full border-b border-black my-4"></div>
          </div>
        ))}
        <NavLink to="/checkout">
        <button className="bg-black text-white text-3xl rounded-lg w-[400px] h-[70px]">
          Checkout
        </button>
        </NavLink>
      </div>
      <div className=" flex-1  flex flex-col gap-5">

        <p className="text-white bg-black text-3xl justify-center flex h-[70px] items-center">
          Checkout
        </p>
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
        <div
          style={{ backgroundColor: "#FCFAFA" }}
          className="shadow-md flex py-5 justify-between px-5 items-center"
        >
          <p className="text-xl ">Enter your Coupon code</p>
          <img src={Add} alt="" className="w-6 h-6" />
        </div>
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

export default Cart;
