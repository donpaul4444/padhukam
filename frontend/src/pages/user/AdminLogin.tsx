
import React from 'react'

const AdminLogin = () => {
  return (
    <div className='w-full flex justify-center mt-20 '>
        <div className='flex flex-col gap-5'>

        <p className='text-5xl font-semibold mb-4'>Admin Login</p>

        <div>
            <p className='text-xl font-semibold'>Username or Email address</p>
            <input type="text" placeholder='Enter your email address or User name' className='border  w-[500px] h-[60px]'/>
        </div>
        <div>
            <p className='text-xl font-semibold'>Password</p>
            <input type="text" placeholder='Enter your password' className='border  w-[500px] h-[60px]'/>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <button className="px-4 py-1 bg-black text-white text-xl rounded-lg">LOGIN</button>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 border border-black"></div>
            <p>Remember Me</p>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default AdminLogin
