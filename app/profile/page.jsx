"use client";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";
import React from "react";

const dashBoard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
     <UserProfile/>
    </div>
  );
};

export default dashBoard;
