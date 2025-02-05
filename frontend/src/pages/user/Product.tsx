import photo1 from "../../assets/images/Rectangle 110.png";
import photo2 from "../../assets/images/Rectangle 111.png";
import photo3 from "../../assets/images/Rectangle 112.png";
import photo4 from "../../assets/images/Rectangle 113.png";
import photomain from "../../assets/images/Mask group (6).png";
import StarRating from "../../components/StarRating";
import Downarrow from "../../assets/images/Down-arrow.png";
import Calender from "../../assets/icons/material-symbols_calendar-month-outline.png";
import Shipping from "../../assets/icons/ph_truck-light.png";
import Return from "../../assets/icons/return.png";
import Copy from "../../assets/icons/ic_baseline-content-copy.png";
import ProductCard from "../../components/ProductCard";
import leftarrow from "../../assets/images/left arrow.png";
import rightarrow from "../../assets/images/right arrow.png";
import bestSeller from "../../temp";

const Product = () => {
  return (
    <div>
      <div className="flex mx-40 gap-14">
        {/* Left Side */}
        <div className="w-[650px] ">
          <div className="flex h-[500px] gap-2">
            <div className="flex flex-col h-auto justify-between">
              <img src={photo1} alt="" className="w-[120px] h-[120px]" />
              <img src={photo2} alt="" className="w-[120px] h-[120px]" />
              <img src={photo3} alt="" className="w-[120px] h-[120px]" />
              <img src={photo4} alt="" className="w-[120px] h-[120px]" />
            </div>
            <div className="flex flex-1 justify-center items-center border-2 shadow-lg">
              <img src={photomain} alt="" className=" p-2 w-[500px] " />
            </div>
          </div>
          <div className="flex py-3 justify-between gap-5 ">
            <button
              className=" border-2 text-3xl py-2 rounded-sm w-[300px] h-[60px]"
              style={{ borderColor: "#AA6843" }}
            >
              ADD TO CART
            </button>
            <button
              className=" border-2 text-3xl py-2 rounded-sm text-white w-[300px] h-[60px]"
              style={{ backgroundColor: "#AA6843" }}
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold">Hush Puppies</p>
          <div className="border-b-2 text-4xl font-semibold">
            Men Formal Wear Shoes
          </div>
          <StarRating rating={3} />
          <div>
            <p className="text-4xl font-bold">₹1500</p>
            <p>(Inclusive of all taxes)</p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="mb-2 font-semibold">Select Size (UK)</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg">
                  7
                </button>
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg">
                  8
                </button>
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg">
                  9
                </button>
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg relative bg-gray-300">
                  10
                  <span className="absolute w-[120%] h-0.5 bg-gray-700 rotate-45"></span>
                </button>
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg relative bg-gray-300">
                  11
                  <span className="absolute w-[120%] h-0.5 bg-gray-700 rotate-45"></span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <p className="mb-2 font-semibold">Qty</p>
              <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg relative bg-gray-300 flex gap-1">
                1
                <img src={Downarrow} alt="" className="w-3 h-2" />
              </button>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-4">
              <p className="text-3xl font-semibold">Delivery Options</p>
              <div
                className="flex   w-[300px] justify-between px-4 p-2"
                style={{ backgroundColor: "#EEEAEA" }}
              >
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  style={{ backgroundColor: "#EEEAEA" }}
                />
                <button>
                  <p style={{ color: "#713F23" }}>Check</p>
                </button>
              </div>
              <div className="flex gap-2">
                <img src={Calender} alt="" className="w-5 h-5" />
                <p>Enter PIncode For Delivery Date</p>
              </div>
              <div className="flex gap-2">
                <img src={Shipping} alt="" className="w-5 h-5" />
                <p>All India Shipping</p>
              </div>
              <div className="flex gap-2">
                <img src={Return} alt="" className="w-5 h-5" />
                <p>7 Days Returns*</p>
              </div>
            </div>
            <div>
              <p className="text-xl mb-5" style={{ color: "#AA6843" }}>
                Today's Deal
              </p>
              <div
                className="flex  items-center "
                style={{ backgroundColor: "#EEEAEA" }}
              >
                <div className="  p-2 px-4">
                  <p className="text-xl ">
                    Use Coupon{" "}
                    <span className="text-gray-500">KENVILLFIRST20</span>
                  </p>
                  <p className="text-gray-500">Signup with Kenvill to get</p>
                  <p className="text-gray-500">
                    15% off on your first Purchase
                  </p>
                </div>
                <div className=" border-l-2 border-black px-6">
                  <img src={Copy} alt="" className="w-10 h-10 " />
                  <p>Copy</p>
                </div>
              </div>
              <div
                className="flex  items-center "
                style={{ backgroundColor: "#EEEAEA" }}
              >
                <div className="  p-2 px-4">
                  <p className="text-xl ">
                    Use Coupon{" "}
                    <span className="text-gray-500">KENVILLFIRST20</span>
                  </p>
                  <p className="text-gray-500">Signup with Kenvill to get</p>
                  <p className="text-gray-500">
                    15% off on your first Purchase
                  </p>
                </div>
                <div className=" border-l-2 border-black px-6">
                  <img src={Copy} alt="" className="w-10 h-10 " />
                  <p>Copy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Details */}
      <div className="flex-col flex items-center mx-32 mt-10 gap-2">
        <p className="text-2xl font-semibold mb-">PRODUCT DETAILS</p>
        <div className="border-b-2 border-black w-[1500px] "></div>
        <div className="w-full  rounded-lg flex flex-col gap-2 p-4 px-28 ">
          <div className="flex gap-2 items-center">
            <p className="bg-black p-1 rounded-full"></p>
            <p className="text-xl font-semibold">Sole</p>
            <p className="text-xl"> : </p>
            <p className="text-xl">Thermoplastic Elastomers</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="bg-black p-1 rounded-full"></p>
            <p className="text-xl font-semibold">Closure</p>
            <p className="text-xl"> : </p>
            <p className="text-xl">LAce-Up</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="bg-black p-1 rounded-full"></p>
            <p className="text-xl font-semibold">Heel Height</p>
            <p className="text-xl"> : </p>
            <p className="text-xl">1 inches</p>
          </div>
        </div>
      </div>
      {/* Similar Products */}
      <div className="mt-10 ">
        <div className=" w-full flex flex-col items-center justify-center gap-2 ">
          <p className="text-2xl font-semibold mt-2 ">SIMILAR PRODUCTS</p>
          <div className="border-b-2 border-black w-[1500px] "></div>
          <div className="flex  w-full justify-center items-center gap-2">
            <div className="flex w-[80%] mt-5 justify-between items-center">
              <img src={leftarrow} alt="" className="w-20 h-20" />
              {bestSeller.slice(0, 4).map((val) => (
                <div>
                  <ProductCard
                    image={val.image}
                    name={val.name}
                    subhead={val.subhead}
                    rating={val.rating}
                    price={val.price}
                  />
                </div>
              ))}
              <img src={rightarrow} alt="" className="w-20 h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
