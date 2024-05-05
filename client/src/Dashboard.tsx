import { UserButton } from "@clerk/clerk-react";

import Header from "./components/Header";
import MainLO from "./components/MainLO";

const Dashboard = () => {
  return (
    // <div>
    //   <h1 className="text-white">Welcome dashboard</h1>
    //   <UserButton/>
    // </div>
    <>
      <Header/>

      <MainLO/>

    </>
    
  )
}

export default Dashboard