import banner from "../../assets/images/pexels-photo-298863.webp";

const SignUp = () => {
  return (
    <div className="flex justify-center  gap-16 mt-10 h-[500px]">
      <div
        className="w-[400px] h-[400px] bg-gray-200 flex flex-col items-center gap-2 justify-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40  backdrop-blur-sm"></div>
        <div className="relative text-center">
          <p className="text-white text-4xl">Already have </p>
          <p className="text-white text-4xl">an Account?</p>
          <p className="text-white  mb-8 text-xl mt-4">Sign in to Continue</p>
          <button className="bg-white px-16 py-1  rounded-lg">LOG IN</button>
        </div>
      </div>
      <div className="w-[500px] ">
        <p className="text-4xl mb-6">Sign Up</p>
        <div>
          <p>Email address/Mobile number</p>
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Email your email address / Mobile number"
              className=" border px-3 py-2  w-[350px]"
            />
            <button className="bg-black text-white px-2 py-1 rounded-full">Send OTP</button>
          </div>
        </div>
        <div className="mb-6">
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-[350px] border px-3 py-2"
          />
        </div>
        <div className="mb-6">
          <p>Retype Password</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-[350px] border px-3 py-2"
          />
        </div>
        <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Verify OTP"
              className=" border px-3 py-2  w-[350px]"
            />
            <button className="bg-black text-white px-2 py-1 rounded-full">Verify OTP</button>
          </div>
        <div className="flex items-center gap-6 mb-4">
          <button className="px-4 py-1 bg-black text-white text-xl rounded-lg">
            SIGN UP
          </button>

        </div>

      </div>
    </div>
  );
};

export default SignUp;
