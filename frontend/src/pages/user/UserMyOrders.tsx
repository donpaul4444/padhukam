import { Checkbox } from "antd";
import searchicon from "../../assets/images/search.png";
import CartItem from "../../components/CartItem";
import bestSeller from "../../temp";

const UserMyOrders = () => {
  return (
    <div className="flex gap-14 pr-10">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold">Manage your orders</p>
        <div className="flex  justify-between items-center px-5 w-[1000px] h-[40px] border shadow-sm bg-white mb-2 ">
          <div className="text-gray-400">
            Search your Orders using name, Order ID, Amount
          </div>
          <img src={searchicon} alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="border rounded-xl w-[1000px]">
          <div className="flex justify-between border-b p-4 rounded-t-xl  bg-[#F0E0CE]">
            <div>
              <p>Order Date</p>
              <p>15/05/2023</p>
            </div>
            <div>
              <p>Order Number</p>
              <p>#112-112133213</p>
            </div>
            <div>
              <p>Ship To</p>
              <p>Abhilash Abin Zacahariah</p>
            </div>
            <div>
              <p>Total</p>
              <p className="font-bold">₹6,000</p>
            </div>
          </div>
          <div className="p-4">
            {bestSeller.slice(0, 1).map((val) => (
              <div className="flex  justify-between ">
                <CartItem
                  image={val.image}
                  name={val.name}
                  colour={val.colour}
                  size={val.size}
                  price={val.price}
                />
                <div className="flex flex-col justify-between items-end">
                  <div className="flex gap-1">
                    <p>Status :</p>
                    <div>
                      <p className="text-green-500">PROCESSING</p>
                      <p>15/05/2023</p>
                    </div>
                  </div>
                  <p>Invoice</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-xl w-[1000px]">
          <div className="flex justify-between border-b p-4 rounded-t-xl  bg-[#F0E0CE]">
            <div>
              <p>Order Date</p>
              <p>15/05/2023</p>
            </div>
            <div>
              <p>Order Number</p>
              <p>#112-112133213</p>
            </div>
            <div>
              <p>Ship To</p>
              <p>Abhilash Abin Zacahariah</p>
            </div>
            <div>
              <p>Total</p>
              <p className="font-bold">₹6,000</p>
            </div>
          </div>
          <div className="p-4">
            {bestSeller.slice(0, 1).map((val) => (
              <div className="flex  justify-between ">
                <CartItem
                  image={val.image}
                  name={val.name}
                  colour={val.colour}
                  size={val.size}
                  price={val.price}
                />
                <div className="flex flex-col justify-between items-end">
                  <div className="flex gap-1">
                    <p>Status :</p>
                    <div>
                      <p className="text-green-500">PROCESSING</p>
                      <p>15/05/2023</p>
                    </div>
                  </div>
                  <p>Invoice</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-xl w-[1000px]">
          <div className="flex justify-between border-b p-4 rounded-t-xl  bg-[#F0E0CE]">
            <div>
              <p>Order Date</p>
              <p>15/05/2023</p>
            </div>
            <div>
              <p>Order Number</p>
              <p>#112-112133213</p>
            </div>
            <div>
              <p>Ship To</p>
              <p>Abhilash Abin Zacahariah</p>
            </div>
            <div>
              <p>Total</p>
              <p className="font-bold">₹6,000</p>
            </div>
          </div>
          <div className="p-4">
            {bestSeller.slice(0, 1).map((val) => (
              <div className="flex  justify-between ">
                <CartItem
                  image={val.image}
                  name={val.name}
                  colour={val.colour}
                  size={val.size}
                  price={val.price}
                />
                <div className="flex flex-col justify-between items-end">
                  <div className="flex gap-1">
                    <p>Status :</p>
                    <div>
                      <p className="text-green-500">PROCESSING</p>
                      <p>15/05/2023</p>
                    </div>
                  </div>
                  <p>Invoice</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 border mt-14 h-[500px]">
        <p className="text-2xl flex justify-center mb-10">Filter</p>
        <div className="pl-6 mb-8">
          <p className="text-xl mb-4">ORDER STATUS</p>
          <div className="flex gap-3">
            <Checkbox />
            <p>Delivered</p>
          </div>
          <div className="flex gap-3">
            <Checkbox />
            <p>Cancelled</p>
          </div>
          <div className="flex gap-3">
            <Checkbox />
            <p>Returned</p>
          </div>
        </div>
        <div className="pl-6 mb-6">
          <p className="text-xl mb-4">ORDER TIME</p>
          <div className="flex gap-3">
            <Checkbox />
            <p>LAst 30 Days</p>
          </div>
          <div className="flex gap-3">
            <Checkbox />
            <p>Last 6 Months</p>
          </div>
          <div className="flex gap-3">
            <Checkbox />
            <p>2022</p>
          </div>
          <div className="flex gap-3">
            <Checkbox />
            <p>2021 and older</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMyOrders;
