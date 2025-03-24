import StarRating from "../../components/StarRating";
import Downarrow from "../../assets/images/Down-arrow.png";
import Calender from "../../assets/icons/material-symbols_calendar-month-outline.png";
import Shipping from "../../assets/icons/ph_truck-light.png";
import Return from "../../assets/icons/return.png";
import Copy from "../../assets/icons/ic_baseline-content-copy.png";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, getProductdetails } from "../../services/userService";
import ProductCarousel from "../../components/ProductCarousel";
import { getProducts } from "../../services/adminService";


const Product = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductdetails(id);
        setProduct(response);
        const data = await getProducts();
        setAllProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setSelectedImage(product.image[0]);
    }
  }, [product]);

  const handleAddToCart = async () => {
    try {
      const response = await addToCart({ productId: product._id, quantity });
      if (response && response.data.success) {
        navigate("/cart");
      } else {
        console.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <div className="flex mx-40 gap-14 mt-10">
        {/* Left Side */}
        <div className="w-[700px] ">
          <div className="flex h-[600px] gap-4">
            {/* Left Side - Thumbnails */}
            <div className="flex flex-col gap-4">
              {product?.image.map((val: string, index: number) => (
                <img
                  key={index}
                  src={val}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[150px] h-[150px] object-cover border rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(val)}
                />
              ))}
            </div>

            {/* Right Side - Main Image */}
            <div className="flex flex-1 justify-center items-center border-2 shadow-lg rounded-lg p-4">
              <img
                src={selectedImage || ""}
                alt="Main Product"
                className="max-w-full h-[400px] object-contain"
              />
            </div>
          </div>

          <div className="flex py-3 justify-between gap-5 mt-10">
            <button
              className=" border-2 text-3xl py-2 rounded-sm w-[300px] h-[60px]"
              style={{ borderColor: "#AA6843" }}
              onClick={handleAddToCart}
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
          <p className="text-3xl font-bold">{product?.brand}</p>
          <div className="border-b-2 text-4xl font-semibold">
            {product?.name}
          </div>
          <StarRating rating={3} />
          <div>
            <p className="text-4xl font-bold">₹{product?.price}</p>
            <p>(Inclusive of all taxes)</p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="mb-2 font-semibold">Size (UK)</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 border-2 align-middle flex items-center justify-center text-lg rounded-lg">
                  {product?.size}
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 font-semibold">Qty</p>

              {/* Dropdown */}
              <div className="relative">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 h-10 border-2 text-lg rounded-lg bg-gray-300 appearance-none text-center cursor-pointer"
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                {/* Custom Dropdown Arrow */}
                <img
                  src={Downarrow}
                  alt="Dropdown Arrow"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-2 pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-32 mt-10">
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

      {/* Similar Products */}
      <ProductCarousel title="Similar Products" products={allProducts} />
    </div>
  );
};

export default Product;
