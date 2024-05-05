import { SignedIn, SignedOut, RedirectToSignIn, SignInButton, UserButton } from "@clerk/clerk-react";


import NASA_LOGO from "/nasa.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center gap-5 justify-between w-full py-7 px-10 bg-[#030615]">
        <div className="flex items-center">
            <img src={NASA_LOGO} alt="logo" className="w-20 h-10"/>
            <p className="text-xl font-semibold">NASA API Project</p>
        </div>
        <div className="flex items-center gap-5">
            <Link to='/'>Home</Link>
            <SignedOut>
              <Link to='/signin'>Sign In</Link>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
    </div>
  );
};

export default Header;
