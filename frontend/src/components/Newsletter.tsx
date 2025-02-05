import mailletter from "../assets/images/mail-letter.png";
const Newsletter = () => {
  return (
    <div
    className="flex justify-around h-[150px] w-full mt-10"
    style={{ backgroundColor: "#F1EDED" }}
  >
    <div className="flex items-center gap-10">
      <img src={mailletter} alt="" className="w-[120px] h-[100px]" />
      <div className='flex flex-col gap-1'>
        <p className='font-bold text-2xl'>SIGN UP FOR NEWSLETTERS</p>
        <p className='text-gray-400'>Be the First to Know. Sign up for newsletter today</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-[500px] h-[50px] bg-white flex items-center pl-5 text-gray-400 rounded-md">ENTER YOUR EMAIL</div>
      <button className="bg-black text-white rounded-md h-[50px] w-[100px] px-2 text-sm">
        SUBSCRIBE
      </button>
    </div>
  </div>
  )
}

export default Newsletter
