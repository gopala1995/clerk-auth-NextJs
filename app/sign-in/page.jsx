"use client";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import "./signin.scss";

const signIn = () => {
  return (
    <div className="w-full flex h-screen item-center justify-center">
      <SignedIn />
    </div>
  );
};

export default signIn;
