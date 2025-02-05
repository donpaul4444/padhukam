import { NavLink } from "react-router-dom";
import banner from "../../assets/images/pexels-photo-298863.webp";

const Login = () => {
  return (
    <div className="flex justify-center  gap-10 mt-10 h-[500px]">
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
          <p className="text-white text-4xl">Don't have an </p>
          <p className="text-white text-4xl">Account Yet?</p>
          <p className="text-white  mb-8 text-xl mt-4">Sign up to Continue</p>
          <button className="bg-white px-16 py-2 rounded-lg">
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
      <div className="w-[300px] ">
        <p className="text-4xl mb-6">Login</p>
        <div>
          <p>Mobile/Email address</p>
          <input
            type="text"
            placeholder="Email address/Mobile Number"
            className="w-full border px-3 py-2 mb-6"
          />
          <p>Password</p>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full border px-3 py-2"
          />
        </div>
        <div className="flex items-center gap-6 mt-4">
          <button className="px-4 py-1 bg-black text-white text-xl rounded-lg">LOGIN</button>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 border border-black"></div>
            <p>Remember Me</p>
          </div>
        </div>
        <NavLink to="/forgotpassword">
        <p className="underline">Forgot Password?</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
