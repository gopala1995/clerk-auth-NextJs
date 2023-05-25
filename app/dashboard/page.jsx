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
      {user ? (
        <>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* <UserProfile /> */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default dashBoard;
