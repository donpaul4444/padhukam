

const ForgotPassword = () => {
  return (

<div className="flex justify-center mt-10">

    <div className="w-[500px] ">
      <p className="text-4xl mb-6">Recover Your Account</p>
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
        <div className="flex items-center gap-4 mb-6 ">
          <input
            type="text"
            placeholder="Verify OTP"
            className=" border px-3 py-2  w-[150px]"
            />
          <button className="bg-black text-white px-2 py-1 rounded-full">Verify OTP</button>
        </div>
      </div>
      <div className="mb-6">
        <p>Enter your New Password</p>
        <input
          type="text"
          placeholder="password must contain 8 characters and number"
          className="w-[350px] border px-3 py-2"
          />
      </div>
      <div className="mb-6">
        <p>Re-enter your New Password</p>
        <input
          type="text"
          placeholder="password must contain 8 characters and number"
          className="w-[350px] border px-3 py-2"
          />
      </div>

      <div className="flex items-center gap-6 mb-4">
        <button className="px-4 py-1 bg-black text-white text-xl rounded-lg">
          Continue
        </button>
      </div>

    </div>

            </div>
  )
}

export default ForgotPassword
