import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkProvider } from '@clerk/clerk-react';
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
import SignUp from "./SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/signin" element={<Home />} />
      <Route path="/apod" element={<Homepage />} />
      <Route path="/mrp" element={<Mrp />} />
      <Route index element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route
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
      /> */}
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
