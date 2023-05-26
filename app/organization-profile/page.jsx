import { OrganizationProfile } from '@clerk/nextjs'
import React from 'react'

const Member = () => {
  return (
    <div className="w-full flex h-screen item-center justify-center">
      <OrganizationProfile/>
    </div>
  )
}

export default Member