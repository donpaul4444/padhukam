import CartItem from "../../components/CartItem";
import Downarrow from "../../assets/images/Down-arrow.png";
import Delete from "../../assets/icons/Delete.png";
// import Add from "../../assets/icons/Add.png";
import gpaylogo from "../../assets/logos/gpay.png";
import visalogo from "../../assets/logos/Visa_Logo 1 (1).png";
import mastercardlogo from "../../assets/logos/mastercard.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, removeCart } from "../../services/userService";
import useCartStore from "../../store/cartStore";

const Cart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any[]>([]);
  const {setStoreCart}=useCartStore()

  useEffect(() => {
    const getCartItem = async () => {
      try {
        const response = await getCart();

        if (response?.data?.success) {
          setCartItems(response.data.cart.items || []);
          setStoreCart(response.data.cart.items || [])
        } else {
          console.error("Error: Unexpected response format", response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCartItem();
  }, [setStoreCart]);

const handleRemoveCart=async(productId: string)=>{
try {
  const data= await removeCart(productId)
  if(data?.success){
    const updatedCart = cartItems.filter((item) => item.productId._id !== productId);
    setCartItems(updatedCart);
    setStoreCart(updatedCart);
  }else{
    console.error("Failed to remove item:", data?.message);
  }
  
} catch (error) {
  console.error("Error removing item:", error);
}
}

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );
  const gstAmount = subtotal * 0.18; // 18% GST
  const totalPrice = subtotal + gstAmount; // Final Total
  return (
    <div className="px-20 flex gap-20">
      <div className="w-[1200px] ">
        <p className="text-3xl font-bold mb-2">YOUR CART</p>
        <p className="text-2xl mb-6">
          Total {cartItems.length} Items In Your Cart
        </p>
        <div className="min-h-[600px]">

        {cartItems.length > 0 ? (
          cartItems.map((val) => (
            <div>
              <div className="w-full border-b border-black my-2"></div>
              <div className="flex  justify-between ">
                <CartItem
                  image={val.productId.image[0]}
                  name={val.productId.name}
                  rating={2}
                  category={val.productId.category}
                  brand={val.productId.brand}
                  size={val.productId.size}
                  price={val.productId.price}
                  />
                <div className="flex gap-2">
                  <div>Quantity :</div>
                  <button
                    className="flex bg-red h-6 w-10 justify-center items-center py-2 rounded-lg gap-1"
                    style={{ backgroundColor: "#F0E0CE" }}
                    >
                    <div>{val.quantity}</div>
                    <img src={Downarrow} alt="" className="w-3 h-2" />
                  </button>
                </div>
              </div>
              <div className="flex justify-end ">

              <button onClick={()=>handleRemoveCart(val.productId._id)}>
                <img src={Delete} alt="" className="w-5 h-5" />
              </button>
              </div>

              <div className="w-full border-b border-black my-4"></div>
            </div>
          ))
        ) : (
          <p className="flex justify-center text-3xl font-semibold h-[600px] items-center">Your cart is empty.</p>
        )}
        </div>
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
            <p className="text-xl">{cartItems.length} ITEMS</p>
            <p className="text-xl">₹ {subtotal}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">Delivery Charges</p>
            <p className="text-xl">Free</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">GST Amount</p>
            <p className="text-xl">₹ {gstAmount}</p>
          </div>
          {/* <div className="flex justify-between px-4">
            <p className="text-xl">Coupon Applied</p>
            <p className="text-xl text-gray-500">KENVILLFIRST20</p>
          </div> */}
          {/* <div className="flex justify-between px-4">
            <p className="text-xl text-blue-500">Discount 15%</p>
            <p className="text-xl text-blue-500">-₹ 1,800</p>
          </div> */}
          <div className="flex justify-between px-4">
            <p className="text-2xl font-semibold">TOTAL</p>
            <p className="text-2xl font-semibold">₹ {totalPrice}</p>
          </div>
        </div>
        {/* <div
          style={{ backgroundColor: "#FCFAFA" }}
          className="shadow-md flex py-5 justify-between px-5 items-center"
        >
          <p className="text-xl ">Enter your Coupon code</p>
          <img src={Add} alt="" className="w-6 h-6" />
        </div> */}
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
