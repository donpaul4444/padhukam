import { useEffect, useState } from "react";
import banner from "../../assets/images/pexels-photo-298863.webp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendOtp, signUpUser, verifyOtp } from "../../services/userService";

const SignUp = () => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState(
    JSON.parse(localStorage.getItem("otpStatus") || "false")
  );
  const [otpVerified, setOtpVerified] = useState(
    JSON.parse(localStorage.getItem("otpVerified") || "false")
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("otpStatus", JSON.stringify(otpStatus));
    localStorage.setItem("otpVerified", JSON.stringify(otpVerified));
  }, [email, otpStatus, otpVerified]);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("please enter your email");
      return;
    }
    try {
      const data = await sendOtp(email);
      toast.success(data.message);
      setOtpStatus(true);
      localStorage.setItem("otpStatus", "true");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("please enter your OTP");
      return;
    }

    try {
      const data = await verifyOtp(email, otp);
      toast.success(data.message);
      setOtpVerified(true);
      localStorage.setItem("otpVerified", "true");

      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSignUp = async () => {
    if (!otpVerified) {
      toast.error("please verify OTP before signing up");
      return;
    }
    if (!password || !confirmPassword) {
      toast.error("Please enter your password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const data = await signUpUser(email, password);
      toast.success(data.message);
      localStorage.clear();
      navigate("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

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
          <p>Email address</p>
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Email your email address"
              className=" border px-3 py-2  w-[350px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-black text-white px-2 py-1 rounded-full"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        </div>
        {otpStatus && (
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Verify OTP"
              className=" border px-3 py-2  w-[350px]"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="bg-black text-white px-2 py-1 rounded-full"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}
        <div className="mb-6">
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-[350px] border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <p>Retype Password</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-[350px] border px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6 mb-4">
          <button
            className="px-4 py-1 bg-black text-white text-xl rounded-lg"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
