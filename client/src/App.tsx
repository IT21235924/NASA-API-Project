import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Homepage from "./apod";
import Mrp from "./Mrp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route index element={<Home />} />
      <Route path="/apod" element={<Homepage />} />
      <Route path="/mrp" element={<Mrp />} />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </>
  )
);

export default function App() {
  return (
    // <header>
    //   <SignedOut>
    //     <SignInButton />
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </header>
    <>
      <RouterProvider router={router} />
    </>
  );
}
