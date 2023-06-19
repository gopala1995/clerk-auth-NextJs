"use client"
import { OrganizationProfile, useUser } from '@clerk/nextjs'
import React from 'react'

const Member = () => {
  const {user,isLoaded} = useUser()
  return (
    <div className="w-full flex h-screen item-center justify-center">
      {user?<OrganizationProfile/>:<h1>Loading......</h1>}
    </div>
  )
}

export default Member