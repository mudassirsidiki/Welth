import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">




      {/* ****** */}
      {/* Navbar */}
      {/* ****** */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">







        {/* ******************** */}
        {/* Logo added in Navbar */}
        {/* ******************** */}
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="my Logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex space-x-4 items-center">








          {/* ******************************************************************************************************** */}
          {/* When someone is Signed-In two buttons will appear 1-Dashboard 2-Add Transaction along with the user icon */}
          {/* ******************************************************************************************************** */}

          <SignedIn>
            {/* Dashboard Button with icon named (LayoutDashboard) from lucide-react */}
            <Link
              href={"/dashboard"}
              className="text-gray-800 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            {/* Add Transaction Button with icon named (PenBox) from lucide-react */}
            <Link href={"/transaction"} className="text-gray-800">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>








          {/* ********************************************************************* */}
          {/* When someone is Signed-Out two buttons will appear 1- Login 2- Signup */}
          {/* ********************************************************************* */}
          <SignedOut>
            <div className="flex gap-2">
              {/* Sign In Button */}
              <SignInButton forceRedirectUrl="/dashboard" aschild="true">
                <Button variant="outline">Log in</Button>
              </SignInButton>

              {/* Sign Up Button */}
              <SignUpButton aschild="true">
                <Button variant="outline">Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>








          {/* ****************************************************** */}
          {/* When someone is Signed-In user button will also appear */}
          {/* ****************************************************** */}

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ",
                },
              }}
            />
          </SignedIn>


          
        </div>
      </nav>
    </div>
  );
};

export default Header;
