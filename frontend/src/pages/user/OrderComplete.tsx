import ordercomplete from "../../assets/logos/order-complete.png";

const OrderComplete = () => {
  return (
    <div className="flex justify-between px-32 h-[600px]">
      <div >
        <p className="text-4xl font-bold">Order Completed</p>
        <p className="text-green-700 text-2xl font-semibold">Arriving By Mon,May 2023</p>
        <div className="flex justify-end w-[1200px] mt-32 ">

        <div className="flex flex-col items-center justify-end">
          <img src={ordercomplete} alt="" className="w-[100px] h-[100px] mb-4" />
          <p className="text-4xl font-semibold mb-4">Your order is Completed</p>
          <p className="text-3xl">
            Thank You for your order, Sit tight we are processing your order
          </p>
          <p className="text-3xl">we will update you with your order in email</p>
          <button className="text-3xl rounded-3xl px-4 py-2 mt-4 text-white" style={{ backgroundColor: "#AA6843" }}>
            Continue Shopping
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
