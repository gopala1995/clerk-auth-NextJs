"use client";
import { SignIn} from "@clerk/nextjs";
import React from "react";

const signIn = () => {
  return (
    <div className="w-full flex h-screen item-center justify-center">
      <SignIn/>
    </div>
  );
};

export default signIn;
