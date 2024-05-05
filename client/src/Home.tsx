import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";

import COVER_IMAGE from "/astronaut.jpg";
import NASA_LOGO from "/nasa.svg";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img
          src={COVER_IMAGE}
          alt="COVER_IMAGE"
          className="h-screen object-cover"
        />
        <div className="absolute top-24 left-10">
          <h1 className="text-4xl text-white font-bold my-4">
            Explore the Universe.
          </h1>
          <p className="text-xl text-white font-normal">
            Unlock the Wonders of Space.
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col p-20 items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-white font-semibold mr-auto">
          <img className="h-10 inline" src={NASA_LOGO} /> NASA API Project.
        </h1>

        <div className="w-full flex flex-col max-w-[500px] mt-56">
          <div className="w-full flex flex-col mb-2 ">
            <h3 className="text-3xl font-semibold mb-2 flex items-center justify-center">
              Sign In
            </h3>
            <p className="text-base mb-2 flex items-center justify-center">
              Welcome Back! Please Sign In
            </p>
          </div>

          <div className="w-full flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#0099ff] rounded-md p-4 text-center flex item-center justify-center">
              <SignInButton mode="modal" forceRedirectUrl={'/dashboard'}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
