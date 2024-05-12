// import React from 'react';
import { Link } from "react-router-dom";
import { SignUpButton } from "@clerk/clerk-react";


import NASA_LOGO from "/nasa.svg";
import COVER_IMAGE from "/signup.jpg";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img
          src={COVER_IMAGE}
          alt="COVER_IMAGE"
          className="h-screen object-cover"
        />
        <div className="absolute top-3/4 left-10">
          <h1 className="text-4xl text-white font-bold my-4">
            Welcome Aboard!
          </h1>
          <p className="text-xl text-white font-normal">
            Create Your Account.
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col p-20 items-center bg-black">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-white font-semibold mr-auto">
          <img className="h-10 inline" src={NASA_LOGO} /> NASA API Project.
        </h1>

        <div className="w-full flex flex-col max-w-[500px] mt-56">
          <div className="w-full flex flex-col mb-2 ">
            <h3 className="text-3xl font-semibold mb-2 flex items-center justify-center">
              Sign Up
            </h3>
            <p className="text-base mb-2 flex items-center justify-center">
              Welcome! Please Sign In
            </p>
          </div>

          <div className="w-full flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#0099ff] rounded-md p-4 text-center flex item-center justify-center">
              <SignUpButton mode="modal" forceRedirectUrl={'/'}/>
            </button>
          </div>
          <div className='w-full flex item-center justify-center'>
                    <p className='text-sm font-normal'>Already Sign Up ? <Link to='/signin'><span className='font-semibold text-[#0099ff] underline underline-offset-2 cursor-pointer'>Sign in here</span></Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp