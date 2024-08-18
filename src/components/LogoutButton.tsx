import React from 'react'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const LogoutButton = () => {
  return (
    <LogoutLink className="bg-black hover:bg-black/60 py-2 px-5 text-white font-bold rounded-md">Log out</LogoutLink>
  )
}

export default LogoutButton
