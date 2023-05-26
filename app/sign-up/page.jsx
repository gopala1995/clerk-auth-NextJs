"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const signUp = () => {
  return (
    <div className="w-full flex h-screen item-center justify-center">
      <SignUp />
    </div>
  );
};

export default signUp;
