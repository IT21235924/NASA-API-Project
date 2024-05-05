import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import Header from "./components/Header";
import MainLO from "./components/MainLO";
import MainLI from "./components/MainLI";

const Dashboard = () => {
  return (
    // <div>
    //   <h1 className="text-white">Welcome dashboard</h1>
    //   <UserButton/>
    // </div>
    <>
      <Header/>

      <SignedOut>
        <MainLO/>
      </SignedOut>

      <SignedIn>
        <MainLI/>
      </SignedIn>

    </>
    
  )
}

export default Dashboard