"use client";
import { CreateOrganization, useUser } from "@clerk/nextjs";
import React from "react";

const CreateMember = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="w-full flex h-screen item-center justify-center">
      {user ? <CreateOrganization/> : <h1>Loading.......</h1>}
    </div>
  );
};

export default CreateMember;
