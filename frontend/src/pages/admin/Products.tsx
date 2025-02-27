
import bestSeller from '../../temp'
import addaddressicon from "../../assets/icons/material-symbols_add-circle.png";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <p className='mb-10 text-3xl font-semibold'>Product Management</p>
      <NavLink to="/admin/addproduct">

      <div className="flex gap-4 border  shadow-md items-center  h-[60px] pl-4 bg-[#F4ECE4] mb-5">
          <img src={addaddressicon} alt="" className="w-8 h-8" />
          <p className="text-xl">Add Product</p>
        </div>
      </NavLink>
      <div className="flex bg-[#F4ECE4] p-2 font-semibold border-b border-gray-400 ">
    <p className="w-[150px] break-words text-center ">Image</p>
    <p className="w-[150px] break-words text-center ">Product Name</p>
    <p className="w-[150px] break-words text-center ">Product ID</p>
    <p className="w-[100px] break-words text-center ">Qty</p>
    <p className="w-[100px] break-words text-center ">Price</p>
    <p className="w-[150px] break-words text-center ">GST</p>
    <p className="w-[150px] break-words text-center ">Category</p>
    <p className="w-[150px] break-words text-center ">Unit/Type</p>
    <p className="w-[150px] break-words text-center ">Actions</p>
  </div>
<div>
  {bestSeller.slice(0,5).map((val)=>(
          <div className="flex bg-white p-2 border-b border-gray-300 items-center">
            <div className="w-[150px] flex justify-center">
              <img src={val.image} alt="Product" className="w-[60px] h-[60px] object-contain" />
            </div>
          <p className="w-[150px] break-words text-center ">{val.name}</p>
          <p className="w-[150px] break-words text-center ">12345</p>
          <p className="w-[100px] break-words text-center ">1</p>
          <p className="w-[100px] break-words text-center ">{val.price}</p>
          <p className="w-[150px] break-words text-center ">400</p>
          <p className="w-[150px] break-words text-center ">{val.subhead}</p>
          <p className="w-[150px] break-words text-center ">nos</p>
          <div className="w-[150px] flex justify-center">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
            </div>
        </div>
  ))}
</div>
<div className="h-14 flex justify-center mt-10">
          <button style={{ backgroundColor: "#A56826" }} className="w-14 bg-[#F4ECE4]">
            <LeftOutlined style={{ color: "white" }} />
          </button>
          <button className=" w-14 border  bg-gray-200">1</button>
          <button className=" w-14 border">2</button>
          <button className=" w-14 border">3</button>
          <button className=" w-14 border">4</button>
          <button className=" w-14 border">5</button>
          <button style={{ backgroundColor: "#A56826" }} className="w-14">
            <RightOutlined style={{ color: "white" }} />
          </button>
        </div>
    </div>
  )
}

export default Products
